#!/usr/bin/env python3
"""
Backend API Test Suite for Viraj's Portfolio Website
Tests all portfolio data endpoints and contact form functionality
"""

import requests
import json
import time
from datetime import datetime
from typing import Dict, Any, List
import os
import sys

# Get backend URL from frontend environment
BACKEND_URL = "https://viraj-analytics.preview.emergentagent.com"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'User-Agent': 'Portfolio-API-Tester/1.0'
        })
        
    def log_result(self, endpoint: str, method: str, status_code: int, 
                   response_time: float, success: bool, details: str = ""):
        """Log test result"""
        result = {
            'endpoint': endpoint,
            'method': method,
            'status_code': status_code,
            'response_time_ms': round(response_time * 1000, 2),
            'success': success,
            'details': details,
            'timestamp': datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status_emoji = "✅" if success else "❌"
        print(f"{status_emoji} {method} {endpoint} - {status_code} ({result['response_time_ms']}ms)")
        if details:
            print(f"   Details: {details}")
    
    def test_endpoint(self, endpoint: str, method: str = "GET", data: Dict = None) -> Dict[str, Any]:
        """Test a single endpoint"""
        url = f"{self.base_url}{endpoint}"
        start_time = time.time()
        
        try:
            if method == "GET":
                response = self.session.get(url, timeout=30)
            elif method == "POST":
                response = self.session.post(url, json=data, timeout=30)
            else:
                raise ValueError(f"Unsupported method: {method}")
                
            response_time = time.time() - start_time
            
            # Check if response is successful
            success = 200 <= response.status_code < 300
            
            # Try to parse JSON response
            try:
                response_data = response.json()
            except json.JSONDecodeError:
                response_data = {"raw_response": response.text}
            
            details = ""
            if not success:
                details = f"Error: {response_data.get('detail', 'Unknown error')}"
            elif method == "GET" and isinstance(response_data, dict):
                # For GET requests, show some basic info about the response
                if 'message' in response_data:
                    details = f"Message: {response_data['message']}"
                elif isinstance(response_data, list):
                    details = f"Returned {len(response_data)} items"
                elif 'name' in response_data:
                    details = f"Name: {response_data['name']}"
                elif 'title' in response_data:
                    details = f"Title: {response_data['title']}"
            
            self.log_result(endpoint, method, response.status_code, response_time, success, details)
            
            return {
                'success': success,
                'status_code': response.status_code,
                'data': response_data,
                'response_time': response_time
            }
            
        except requests.exceptions.RequestException as e:
            response_time = time.time() - start_time
            error_msg = f"Request failed: {str(e)}"
            self.log_result(endpoint, method, 0, response_time, False, error_msg)
            
            return {
                'success': False,
                'status_code': 0,
                'data': {'error': str(e)},
                'response_time': response_time
            }
    
    def test_health_endpoints(self):
        """Test basic health check endpoints"""
        print("\n🔍 Testing Health Check Endpoints...")
        
        # Test root health check
        self.test_endpoint("/api/")
        
        # Test database health check
        self.test_endpoint("/api/health")
    
    def test_portfolio_endpoints(self):
        """Test all portfolio data endpoints"""
        print("\n📊 Testing Portfolio Data Endpoints...")
        
        # Test personal info
        result = self.test_endpoint("/api/portfolio/personal")
        if result['success'] and 'name' in result['data']:
            print(f"   Personal Info: {result['data']['name']} - {result['data']['title']}")
        
        # Test about info
        result = self.test_endpoint("/api/portfolio/about")
        if result['success'] and 'summary' in result['data']:
            summary_preview = result['data']['summary'][:100] + "..." if len(result['data']['summary']) > 100 else result['data']['summary']
            print(f"   About Summary: {summary_preview}")
        
        # Test projects list
        result = self.test_endpoint("/api/portfolio/projects")
        if result['success'] and isinstance(result['data'], list):
            print(f"   Projects: Found {len(result['data'])} projects")
            for project in result['data'][:3]:  # Show first 3 projects
                print(f"     - {project.get('title', 'Unknown')} (ID: {project.get('id', 'N/A')})")
        
        # Test specific project by ID
        self.test_endpoint("/api/portfolio/projects/1")
        
        # Test invalid project ID
        result = self.test_endpoint("/api/portfolio/projects/999")
        if result['status_code'] == 404:
            print("   ✅ Correctly returned 404 for invalid project ID")
        
        # Test skills
        result = self.test_endpoint("/api/portfolio/skills")
        if result['success'] and isinstance(result['data'], dict):
            categories = list(result['data'].keys())
            print(f"   Skills Categories: {', '.join(categories)}")
        
        # Test education
        result = self.test_endpoint("/api/portfolio/education")
        if result['success'] and isinstance(result['data'], list):
            print(f"   Education: {len(result['data'])} entries")
        
        # Test certifications
        result = self.test_endpoint("/api/portfolio/certifications")
        if result['success'] and isinstance(result['data'], list):
            print(f"   Certifications: {len(result['data'])} entries")
        
        # Test experience
        result = self.test_endpoint("/api/portfolio/experience")
        if result['success'] and isinstance(result['data'], list):
            print(f"   Experience: {len(result['data'])} entries")
        
        # Test languages
        result = self.test_endpoint("/api/portfolio/languages")
        if result['success'] and isinstance(result['data'], list):
            languages = [lang.get('name', 'Unknown') for lang in result['data']]
            print(f"   Languages: {', '.join(languages)}")
        
        # Test achievements
        result = self.test_endpoint("/api/portfolio/achievements")
        if result['success'] and 'achievements' in result['data']:
            print(f"   Achievements: {len(result['data']['achievements'])} entries")
    
    def test_contact_form(self):
        """Test contact form submission"""
        print("\n📧 Testing Contact Form Endpoint...")
        
        # Test contact form submission with realistic data
        contact_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "subject": "Collaboration Opportunity",
            "message": "Hi Viraj, I came across your portfolio and I'm impressed with your work in machine learning and data science. I'd like to discuss a potential collaboration opportunity on a fintech project. Would you be available for a brief call next week?"
        }
        
        result = self.test_endpoint("/api/contact/", method="POST", data=contact_data)
        if result['success']:
            response_data = result['data']
            if 'submission_id' in response_data:
                print(f"   ✅ Contact form submitted successfully - ID: {response_data['submission_id']}")
                print(f"   Message: {response_data.get('message', 'No message')}")
            else:
                print("   ⚠️ Contact form submitted but no submission ID returned")
        else:
            print(f"   ❌ Contact form submission failed: {result['data']}")
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("\n🌐 Testing CORS Configuration...")
        
        # Test preflight request
        try:
            response = self.session.options(f"{self.base_url}/api/portfolio/personal", 
                                          headers={'Origin': 'https://example.com'})
            
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            
            if cors_headers['Access-Control-Allow-Origin']:
                print(f"   ✅ CORS configured - Origin: {cors_headers['Access-Control-Allow-Origin']}")
            else:
                print("   ⚠️ CORS headers not found in response")
                
        except Exception as e:
            print(f"   ❌ CORS test failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all API tests"""
        print(f"🚀 Starting API Tests for Viraj's Portfolio Backend")
        print(f"🔗 Base URL: {self.base_url}")
        print(f"⏰ Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 60)
        
        # Run all test suites
        self.test_health_endpoints()
        self.test_portfolio_endpoints()
        self.test_contact_form()
        self.test_cors_configuration()
    
    def generate_summary(self):
        """Generate test summary"""
        print("\n" + "=" * 60)
        print("📋 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        successful_tests = len([r for r in self.test_results if r['success']])
        failed_tests = total_tests - successful_tests
        
        print(f"Total Tests: {total_tests}")
        print(f"✅ Successful: {successful_tests}")
        print(f"❌ Failed: {failed_tests}")
        print(f"Success Rate: {(successful_tests/total_tests*100):.1f}%")
        
        # Average response time
        avg_response_time = sum(r['response_time_ms'] for r in self.test_results) / total_tests
        print(f"Average Response Time: {avg_response_time:.2f}ms")
        
        # Show failed tests
        if failed_tests > 0:
            print(f"\n❌ FAILED TESTS ({failed_tests}):")
            for result in self.test_results:
                if not result['success']:
                    print(f"   {result['method']} {result['endpoint']} - {result['status_code']} - {result['details']}")
        
        # Show successful tests summary
        print(f"\n✅ SUCCESSFUL TESTS ({successful_tests}):")
        for result in self.test_results:
            if result['success']:
                print(f"   {result['method']} {result['endpoint']} - {result['status_code']} ({result['response_time_ms']}ms)")
        
        print("\n" + "=" * 60)
        print("🎯 Test completed successfully!")
        
        return {
            'total_tests': total_tests,
            'successful_tests': successful_tests,
            'failed_tests': failed_tests,
            'success_rate': successful_tests/total_tests*100,
            'avg_response_time': avg_response_time,
            'results': self.test_results
        }

def main():
    """Main function to run the tests"""
    tester = PortfolioAPITester()
    tester.run_all_tests()
    
    # Generate summary and get results
    summary = tester.generate_summary()
    
    # Return exit code based on test results
    if summary['failed_tests'] > 0:
        print(f"\n⚠️  {summary['failed_tests']} tests failed!")
        sys.exit(1)
    else:
        print(f"\n🎉 All {summary['total_tests']} tests passed!")
        sys.exit(0)

if __name__ == "__main__":
    main()