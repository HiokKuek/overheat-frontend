"use client";

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const apiData = [
    { time: "00:00", requests: 1200 },
    { time: "04:00", requests: 900 },
    { time: "08:00", requests: 2400 },
    { time: "12:00", requests: 3800 },
    { time: "16:00", requests: 4200 },
    { time: "20:00", requests: 3100 },
    { time: "23:59", requests: 1800 },
];

const latencyData = [
    { time: "00:00", ms: 120 },
    { time: "04:00", ms: 115 },
    { time: "08:00", ms: 145 },
    { time: "12:00", ms: 210 },
    { time: "16:00", ms: 180 },
    { time: "20:00", ms: 160 },
    { time: "23:59", ms: 130 },
];

const statusData = [
    { name: "2xx Success", value: 8500 },
    { name: "4xx Client Error", value: 300 },
    { name: "5xx Server Error", value: 50 },
];

const COLORS = ["#f97316", "#6366f1", "#ef4444"]; // Orange (Heat), Indigo (Tech), Red (Error)

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-secondary border border-foreground/10 p-3 rounded shadow-lg">
                <p className="text-xs font-mono text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-bold text-foreground">
                    {payload[0].value}
                    {payload[0].unit}
                </p>
            </div>
        );
    }
    return null;
};

export function DashboardCharts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* API Requests Chart */}
            <div className="p-6 bg-secondary border border-foreground/5 rounded-none">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        API Requests (24h)
                    </h3>
                    <span className="text-xs font-mono text-primary">+12.5%</span>
                </div>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={apiData}>
                            <defs>
                                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis
                                dataKey="time"
                                stroke="rgba(255,255,255,0.3)"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="rgba(255,255,255,0.3)"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value / 1000}k`}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)" }} />
                            <Area
                                type="monotone"
                                dataKey="requests"
                                stroke="#f97316"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorRequests)"
                                unit=" reqs"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Latency Chart */}
            <div className="p-6 bg-secondary border border-foreground/5 rounded-none">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Avg. Latency (ms)
                    </h3>
                    <span className="text-xs font-mono text-green-500">-5ms</span>
                </div>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={latencyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis
                                dataKey="time"
                                stroke="rgba(255,255,255,0.3)"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="rgba(255,255,255,0.3)"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)" }} />
                            <Line
                                type="monotone"
                                dataKey="ms"
                                stroke="#6366f1"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 4, fill: "#6366f1" }}
                                unit="ms"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Status Distribution */}
            <div className="p-6 bg-secondary border border-foreground/5 rounded-none">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Response Status Distribution
                    </h3>
                </div>
                <div className="h-[350px] w-full flex flex-col items-center justify-center gap-6">
                    <div className="h-[180px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={70}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {statusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0)" />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        {statusData.map((entry, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-background/50 border border-foreground/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                                    <span className="text-xs font-mono text-muted-foreground">{entry.name}</span>
                                </div>
                                <span className="font-bold font-mono text-sm">{entry.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
