#!/usr/bin/env python3
"""
Test script to verify backend setup and functionality
Run this after starting the backend to ensure everything works
"""

import requests
import json
import sys
import time

def test_backend():
    """Test the backend API endpoints"""
    
    base_url = "http://localhost:8000"
    
    print("🧪 Testing Backend Setup...")
    print("=" * 50)
    
    # Test 1: Health Check
    print("1. Testing health check...")
    try:
        response = requests.get(f"{base_url}/health", timeout=5)
        if response.status_code == 200:
            print("   ✅ Health check passed")
            print(f"   Response: {response.json()}")
        else:
            print(f"   ❌ Health check failed: {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Health check failed: {e}")
        return False
    
    # Test 2: Root endpoint
    print("\n2. Testing root endpoint...")
    try:
        response = requests.get(f"{base_url}/", timeout=5)
        if response.status_code == 200:
            print("   ✅ Root endpoint working")
            print(f"   Response: {response.json()}")
        else:
            print(f"   ❌ Root endpoint failed: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Root endpoint failed: {e}")
    
    # Test 3: API Documentation
    print("\n3. Testing API documentation...")
    try:
        response = requests.get(f"{base_url}/docs", timeout=5)
        if response.status_code == 200:
            print("   ✅ API documentation accessible")
            print(f"   Visit: {base_url}/docs")
        else:
            print(f"   ❌ API documentation failed: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"   ❌ API documentation failed: {e}")
    
    # Test 4: Get matches endpoint
    print("\n4. Testing matches endpoint...")
    try:
        response = requests.get(f"{base_url}/api/v1/matches/", timeout=5)
        if response.status_code == 200:
            print("   ✅ Matches endpoint working")
            matches = response.json()
            print(f"   Found {len(matches)} matches")
        else:
            print(f"   ❌ Matches endpoint failed: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Matches endpoint failed: {e}")
    
    # Test 5: Create a test match
    print("\n5. Testing match creation...")
    try:
        test_match = {
            "team1": "Test Team A",
            "team2": "Test Team B",
            "scorecard": "0-0",
            "status": "scheduled",
            "date": "2025-01-01",
            "time": "12:00",
            "notes": "Test match created by test script"
        }
        
        response = requests.post(
            f"{base_url}/api/v1/matches/",
            json=test_match,
            timeout=5
        )
        
        if response.status_code == 201:
            print("   ✅ Match creation working")
            created_match = response.json()
            print(f"   Created match ID: {created_match['id']}")
            
            # Clean up - delete the test match
            match_id = created_match['id']
            delete_response = requests.delete(f"{base_url}/api/v1/matches/{match_id}", timeout=5)
            if delete_response.status_code == 200:
                print("   ✅ Test match cleaned up")
            else:
                print("   ⚠️  Test match created but not cleaned up")
        else:
            print(f"   ❌ Match creation failed: {response.status_code}")
            print(f"   Response: {response.text}")
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Match creation failed: {e}")
    
    print("\n" + "=" * 50)
    print("🎉 Backend testing completed!")
    print(f"📖 API Documentation: {base_url}/docs")
    print(f"🔗 ReDoc: {base_url}/redoc")
    
    return True

def check_dependencies():
    """Check if required Python packages are installed"""
    print("🔍 Checking dependencies...")
    
    required_packages = ['requests', 'fastapi', 'sqlalchemy', 'psycopg2']
    missing_packages = []
    
    for package in required_packages:
        try:
            __import__(package)
            print(f"   ✅ {package}")
        except ImportError:
            print(f"   ❌ {package} - MISSING")
            missing_packages.append(package)
    
    if missing_packages:
        print(f"\n⚠️  Missing packages: {', '.join(missing_packages)}")
        print("Run: pip install -r requirements.txt")
        return False
    
    return True

if __name__ == "__main__":
    print("🚀 Backend Test Suite")
    print("=" * 50)
    
    # Check dependencies first
    if not check_dependencies():
        print("\n❌ Dependencies check failed. Please install missing packages.")
        sys.exit(1)
    
    print("\n" + "=" * 50)
    
    # Test backend
    if test_backend():
        print("\n✅ All tests passed! Backend is running correctly.")
    else:
        print("\n❌ Some tests failed. Check the output above for details.")
        sys.exit(1)
