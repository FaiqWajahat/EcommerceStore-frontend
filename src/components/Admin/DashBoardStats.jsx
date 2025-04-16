import { FaDollarSign, FaUsers, FaShoppingCart, FaBoxOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

const DashBoardStats = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [allProduct, setAllProducts] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const StockCounter = ({ stock }) => (
    <CountUp 
      start={0} 
      end={stock} 
      duration={3} 
      separator=","
      decimals={2}
      decimal="."
      prefix="$"
    />
  );
  
  const Counter = ({ value }) => (
    <CountUp 
      start={0} 
      end={value} 
      duration={3} 
      separator=","
    />
  );

  const baseURL = 'http://localhost:8080';

  const fetchRevenue = async () => {
    try {
      const res = await fetch(`${baseURL}/admin/Revenue`);
      const data = await res.json();
      setRevenue(data.revenue);
    } catch (err) {
      console.log("Revenue fetch failed", err);
    }
  };

  const getUsers = async () => {
    try {
      const res = await fetch(`${baseURL}/admin/getUsers`);
      const data = await res.json();
      setAllUsers(data?.allUsers || []);
    } catch (err) {
      console.log(err);
    }
  };

  const getOrders = async () => {
    try {
      const res = await fetch(`${baseURL}/admin/getOrders`);
      const data = await res.json();
      setAllOrders(data?.allOrders || []);
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async () => {
    try {
      const res = await fetch(`${baseURL}/admin/getProducts`);
      const data = await res.json();
      setAllProducts(data?.allProducts || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
    getOrders();
    getProducts();
    fetchRevenue()
  }, []);

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Revenue Card */}
        <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 p-0.5 shadow-lg">
          <div className="relative bg-white rounded-xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02]">
            <div className="absolute -right-4 -top-4 opacity-10">
              <FaDollarSign className="h-24 w-24 text-emerald-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm font-medium text-emerald-800">Revenue</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2">
                <StockCounter stock={revenue} decimal={2} />
              </p>
              <Link 
                to="https://dashboard.stripe.com/test/dashboard" 
                className="inline-flex items-center mt-3 text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
              >
                Stripe Dashboard
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mt-3 w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Users Card */}
        <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 p-0.5 shadow-lg">
          <div className="relative bg-white rounded-xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02]">
            <div className="absolute -right-4 -top-4 opacity-10">
              <FaUsers className="h-24 w-24 text-blue-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm font-medium text-blue-800">Total Users</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2">
                <Counter value={allUsers.length} />
              </p>
              <Link 
                to="manageUsers" 
                className="inline-flex items-center mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Manage Users
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-full mt-2 w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5 shadow-lg">
          <div className="relative bg-white rounded-xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02]">
            <div className="absolute -right-4 -top-4 opacity-10">
              <FaShoppingCart className="h-24 w-24 text-yellow-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm font-medium text-yellow-800">Total Orders</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2">
                <Counter value={allOrders.length} />
              </p>
              <Link 
                to="orderManagment" 
                className="inline-flex items-center mt-3 text-sm font-medium text-yellow-600 hover:text-yellow-800 transition-colors"
              >
                Manage Orders
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mt-2 w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Products Card */}
        <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 p-0.5 shadow-lg">
          <div className="relative bg-white rounded-xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02]">
            <div className="absolute -right-4 -top-4 opacity-10">
              <FaBoxOpen className="h-24 w-24 text-red-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm font-medium text-red-800">Total Products</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2">
                <Counter value={allProduct.length} />
              </p>
              <Link 
                to="manageProducts" 
                className="inline-flex items-center mt-3 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
              >
                Manage Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="h-1 bg-gradient-to-r from-rose-400 to-red-600 rounded-full mt-2 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardStats;