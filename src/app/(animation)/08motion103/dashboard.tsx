"use client";

import { IconBell } from "@tabler/icons-react";
import { Sidebar } from "./sidebar";

export const Dashboard = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<Sidebar />
			{/* Main Content */}
			<div className="flex-1 overflow-auto">
				{/* header */}
				<Header />
				{/* Dashboard Content */}
				<DashboardContent />
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<header className="bg-white shadow-sm">
			<div className="px-6 py-4 flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Overview</h1>
				<div className="flex items-center space-x-4">
					<button className="p-2 rounded-full hover:bg-gray-100">
						<IconBell className="h-6 w-6 text-gray-600" />
					</button>
					<div className="w-10 h-10 rounded-full bg-gray-300"></div>
				</div>
			</div>
		</header>
	);
};

const DashboardContent = () => {
	return (
		<main className="p-6">
			<StateCards />
			<ActivityCards />
			<RecentActivityBox />
		</main>
	);
};

const StateCards = () => {
	return (
		<>
			{/* Stats Card */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
				{/* Box1 */}
				<div className="bg-white rounded-lg shadow p-6">
					<div className="flex items-center justify-between">
						<h3 className="text-gray-600 text-sm font-medium">
							Total Users
						</h3>
						<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
							+12%
						</span>
					</div>
					<p className="text-3xl font-bold mt-2">2,543</p>
					<p className="text-sm text-gray-500 mt-2">
						Increased by 257 since last month
					</p>
				</div>

				{/* Box2 */}
				<div>
					<div className="bg-white rounded-lg shadow p-6">
						<div className="flex items-center justify-between">
							<h3 className="text-gray-600 text-sm font-medium">
								Total Revenue
							</h3>
							<span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
								+8%
							</span>
						</div>
						<p className="text-3xl font-bold mt-2">$12,345</p>
						<p className="text-sm text-gray-500 mt-2">
							Increased by $1,234 since last month
						</p>
					</div>
				</div>

				{/* Box3 */}
				<div>
					<div className="bg-white rounded-lg shadow p-6">
						<div className="flex items-center justify-between">
							<h3 className="text-gray-600 text-sm font-medium">
								Active Sessions
							</h3>
							<span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
								+5%
							</span>
						</div>
						<p className="text-3xl font-bold mt-2">1,325</p>
						<p className="text-sm text-gray-500 mt-2">
							Increased by $1,234 since last month
						</p>
					</div>
				</div>

				{/* Box4 */}
				<div>
					<div className="bg-white rounded-lg shadow p-6">
						<div className="flex items-center justify-between">
							<h3 className="text-gray-600 text-sm font-medium">
								Conversion Rate
							</h3>
							<span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
								3%
							</span>
						</div>
						<p className="text-3xl font-bold mt-2">12.3%</p>
						<p className="text-sm text-gray-500 mt-2">
							Decreased by 1.8% since last week
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const ActivityCards = () => {
	return (
		<>
			{/* Stats Card */}
			<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-6 h-96">
				{/* Box1 */}
				<div className="bg-white flex flex-col gap-4 rounded-lg shadow p-6">
					<h3 className="text-gray-900 text-xl font-semibold">
						User Activity
					</h3>

					<div className="flex flex-1 p-2 items-center justify-center rounded-md bg-gray-200/60">
						<span className="text-gray-600 font-medium">
							Chart Placeholder
						</span>
					</div>
				</div>

				{/* Box2 */}
				<div className="bg-white flex flex-col gap-4 rounded-lg shadow p-6">
					<h3 className="text-gray-900 text-xl font-semibold">
						Revenue Overview
					</h3>

					<div className="flex flex-1 p-2 items-center justify-center rounded-md bg-gray-200/60">
						<span className="text-gray-600 font-medium">
							Chart Placeholder
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

const RecentActivityBox = () => {
	return (
		<div className="bg-white flex flex-col gap-4 rounded-lg shadow overflow-hidden">
			<div className="p-6 border-b">
        <h3 className="text-gray-900 text-xl font-semibold">
          Recent Activity
        </h3>
      </div>
      <div className="divide-y">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="p-6 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-4"></div>
          <div className="flex-1">
            <p className="font-medium">User #{item} performed an action</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800">View</button>
        </div>
      ))}
      </div>
		</div>
	);
};
