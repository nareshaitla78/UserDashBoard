import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, Building2, Users2, Search, Bell, Settings, CreditCard, UserCircle, BarChart2, Users2 as Partners, LogOut } from 'lucide-react';
import naresh from './assets/naresh.jpeg'
const revenueData = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 12 },
  { name: 'Mar', value: 18 },
  { name: 'Apr', value: 15 },
  { name: 'May', value: 22 },
  { name: 'Jun', value: 20 },
  { name: 'Jul', value: 18 },
];

const customerData = [
  { name: 'Oct', new: 200, lost: 50 },
  { name: 'Nov', new: 180, lost: 40 },
  { name: 'Dec', new: 220, lost: 45 },
  { name: 'Jan', new: 190, lost: 35 },
  { name: 'Feb', new: 185, lost: 38 },
  { name: 'Mar', new: 250, lost: 42 },
];
const BarChartData = [
  { name: 'Starter', new: 200 },
  { name: 'Growth', new: 300 },
  { name: 'Pro', new: 300 },
  { name: 'Elite', new: 400 },
];
const pieData = [
  { name: 'Partner', value: 35, color: '#10B981' },
  { name: 'Social', value: 35, color: '#EF4444' },
  { name: 'Organic', value: 10, color: '#F59E0B' },
  { name: 'Direct', value: 20, color: '#2563EB' },
];

const recentActivity = [
  { type: 'signup', text: 'New lead signed up', time: '2 mins ago', status: 'success' },
  { type: 'partner', text: 'Partner Application Received', time: '5 mins ago', status: 'warning' },
  { type: 'upgrade', text: 'Customer upgraded plan', time: '10 mins ago', status: 'success' },
  { type: 'support', text: 'Support ticket raised', time: '15 mins ago', status: 'error' },
];

const upsellOpportunities = [
  {
    name: 'John Doe',
    currentPlan: 'Basic',
    suggestedPlan: 'Pro',
    potentialValue: '$5,000/yr',
  },
  {
    name: 'John Doe',
    currentPlan: 'Pro',
    suggestedPlan: 'Enterprise',
    potentialValue: '$15,000/yr',
  },
];


function SidebarLink({ 
  icon: Icon, 
  text, 
  active = false, 
  className = "" 
}: { 
  icon: any; 
  text: string; 
  active?: boolean; 
  className?: string; 
}) {
  return (
    <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer 
      ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'} ${className}`}>
      <Icon className="w-5 h-5" />
      <span className={`text-sm font-medium ${className}`}>{text}</span>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, trend, trendColor = 'text-green-500'}: { title: string; value: string; icon: any; trend: string; trendColor?: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-full">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
      </div>
      <p className={`text-sm ${trendColor} mt-2`}>{trend}</p>
    </div>
  );
}

function ActivityItem({ type, text, time, status }: { type: string; text: string; time: string; status: string }) {
  const statusColors = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <div className="flex items-start space-x-3 py-3">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Users className="w-4 h-4 text-blue-600" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{text}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
        {status}
      </div>
    </div>
  );
}
function ProgressBar({ color, percentage }: { color: string; percentage: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${color}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
function LeadStatusItem({ label, count, percentage, color }: { label: string; count: number; percentage: number; color: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${color}`}></div>
          <span className="text-sm text-gray-600">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{count}</span>
          <span className="text-sm text-gray-500">({percentage}%)</span>
        </div>
      </div>
      <ProgressBar color={color} percentage={percentage} />
    </div>
  );
}

function LeadStatus() {
  const leads = [
    { label: 'New', count: 48, percentage: 37, color: 'bg-blue-500' },
    { label: 'In Progress', count: 32, percentage: 25, color: 'bg-yellow-500' },
    { label: 'Qualified', count: 28, percentage: 22, color: 'bg-green-500' },
    { label: 'Lost', count: 20, percentage: 15, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Lead Status</h2>
      <div className="mb-4">
        <span className="text-3xl font-bold">128</span>
        <span className="text-gray-500 ml-2">TOTAL LEADS</span>
      </div>
      <div className="space-y-4">
        {leads.map((lead, index) => (
          <LeadStatusItem key={index} {...lead} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center space-x-2 px-4 py-3">
          <BarChart2 className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold">SocialDC</span>
        </div>
        <div className="mt-8 space-y-1">
          <SidebarLink icon={BarChart2} text="Dashboard" active />
          <SidebarLink icon={Users} text="CRM" />
          <SidebarLink icon={CreditCard} text="Revenue" />
          <SidebarLink icon={Settings} text="Staff" />
          <SidebarLink icon={Users2} text="Customers" />
          <SidebarLink icon={Partners} text="Partners" />
        </div>
        <div className="mt-auto pt-8 text-red-500">
          <SidebarLink icon={LogOut} text="Log Out" className="text-red-500" />

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-500">Overview of your business</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2">
                <img
                  src={naresh}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="TOTAL REVENUE" 
              value="$2,00,000" 
              icon={DollarSign}
              trend="↑ 12.5% from last month"
            />
            <StatCard 
              title="NEW LEADS" 
              value="128" 
              icon={Users}
              trend="↑ 8.2% this week"
            />
            <StatCard 
              title="CURRENT CUSTOMERS" 
              value="845" 
              icon={Building2}
              trend="↑ 8.2% this week"
            />
            <StatCard 
              title="PARTNER COMMISSIONS" 
              value="$45,000" 
              icon={Users2}
              trend="↑ 12.3% this month"
            />
          </div>

          <div className="grid grid-cols-12 gap-6">
              {/* Revenue Chart */}
              <div className=" col-span-6 bg-white p-6 rounded-lg shadow-sm mb-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Revenue Overview</h2>
                  <button className="text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50  border-2 border-blue-500">All Time </button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData} > 
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line connectNulls  type="linear" dataKey="value" stroke="#2563EB" strokeWidth={2} dot={true} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Customer Growth Chart */}
              <div className="col-span-6 bg-white p-6 rounded-lg shadow-sm mb-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Customer Growth</h2>
                  <button className="text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50  border-2 border-blue-500">All Time</button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={customerData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="new" fill="#2563EB" />
                    <Bar dataKey="lost" fill="#DC2626" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div> 
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6 bg-white p-6 rounded-lg shadow-sm mb-2">
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-1">
                  {recentActivity.map((activity, index) => (
                    <ActivityItem key={index} {...activity} />
                  ))}
                </div>
              </div>

              {/* Upsell Opportunities */}
              <div className="col-span-6 bg-white p-6 rounded-lg shadow-sm mb-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Upsell Opportunities</h2>
                  <button className="text-blue-500 px-4 py-2   hover:bg-blue-50   ">View All</button>
                </div>
                <div className="space-y-4">
                  {upsellOpportunities.map((opportunity, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <UserCircle className="w-8 h-8 text-gray-400" />
                          <span className="font-medium">{opportunity.name}</span>
                        </div>
                        <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                          Contact
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Current Plan</p>
                          <p className="font-medium ">{opportunity.currentPlan}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Suggested Plan</p>
                          <p className="font-medium ">{opportunity.suggestedPlan}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Potential Value</p>
                          <p className="font-medium text-green-500">{opportunity.potentialValue}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
               {/* Lead Status */}
               <div className=" col-span-4 bg-white p-6 rounded-lg shadow-sm mb-2">
                <LeadStatus />
              </div>
              <div className="col-span-4 flex flex-col justify-content-center items-start bg-white p-6 rounded-lg shadow-sm mb-2">
                <h2 className="text-lg font-semibold mb-4  ">Lead Status</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                      label={({ name, value }) => `${name} (${value}%)`}
                      height={200}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {/* Customer Growth Chart */}
              <div className="col-span-4 bg-white p-6 rounded-lg shadow-sm mb-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Customer Growth</h2>
                  <button className="   text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50  border-2 border-blue-500">All Time</button>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold">12,00</span>
                  <span className="text-gray-500 ml-2">TOTAL PLANS PURCHASED</span>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={BarChartData}>
                    <CartesianGrid strokeDasharray="2 2" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="new" fill="#2563EB" barSize={30}/>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

             
        </div>
      </div>
    </div>
  );
}

export default App;