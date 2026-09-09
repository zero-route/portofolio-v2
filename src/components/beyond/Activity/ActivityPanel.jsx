"use client";

import { useEffect, useState } from "react";
import {
  Cpu,
  Terminal,
  Radio,
  Code2,
  Globe,
  Flame,
  GitCommit,
  Languages,
} from "lucide-react";
import BorderGlow from "@/components/reactbits/BorderGlow";
import { nowLearning } from "@/data/nowLearning";

const ICONS = { Cpu, Terminal, Radio, Code2, Globe };

function levelColor(level) {
  switch (level) {
    case 0:
      return "bg-white/5";
    case 1:
      return "bg-indigo-900/60";
    case 2:
      return "bg-indigo-700/70";
    case 3:
      return "bg-indigo-500/80";
    case 4:
      return "bg-indigo-300";
    default:
      return "bg-white/5";
  }
}

function groupByWeek(days) {
  if (!days.length) return [];

  const weeks = [];
  let currentWeek = [];

  const firstDate = new Date(`${days[0].date}T00:00:00`);
  const firstDay = firstDate.getDay();

  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null);
  }

  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  return weeks;
}

export default function ActivityPanel() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch("/api/github-activity")
      .then((res) => res.json())
      .then((json) => {
        if (active) setData(json);
      })
      .catch(() => {
        if (active) {
          setData({
            days: [],
            totalContributions: 0,
            currentStreak: 0,
            topLanguage: null,
          });
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const weeks = data?.days ? groupByWeek(data.days) : [];

  const stats = [
    {
      icon: Flame,
      value: loading ? "—" : `${data?.currentStreak ?? 0}`,
      label: "Current Streak",
      desc: "Consecutive days with commits",
    },
    {
      icon: GitCommit,
      value: loading ? "—" : `${data?.totalContributions ?? 0}`,
      label: "Contributions",
      desc: "Last 12 months",
    },
    {
      icon: Languages,
      value: loading ? "—" : data?.topLanguage || "—",
      label: "Top Language",
      desc: "Most used across repos",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <BorderGlow
              key={stat.label}
              backgroundColor="#0d0d14"
              borderRadius={16}
              glowRadius={36}
              glowIntensity={1}
              edgeSensitivity={30}
              coneSpread={25}
              colors={["#8b5cf6", "#6366f1", "#38bdf8"]}
              className="h-full w-full"
            >
              <div className="p-6 text-center">
                <Icon className="mx-auto mb-3 text-indigo-400" size={26} />
                <div className="mb-1 font-sans text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mb-1 font-sans text-sm font-semibold text-white">
                  {stat.label}
                </div>
                <div className="font-sans text-xs text-gray-500">
                  {stat.desc}
                </div>
              </div>
            </BorderGlow>
          );
        })}
      </div>

      <div className="w-full overflow-x-auto">
        {weeks.length ? (
          <div className="flex w-fit gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={
                      day ? `${day.count} contributions on ${day.date}` : ""
                    }
                    className={`h-[10px] w-[10px] rounded-sm ${
                      day ? levelColor(day.level) : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-white/40">
            {loading
              ? "Loading activity..."
              : "Contribution data unavailable right now."}
          </p>
        )}
      </div>

      <div>
        <h3 className="mb-4 font-sans text-lg font-semibold text-white">
          Now Learning
        </h3>

        <div className="flex flex-col gap-3">
          {nowLearning.map((item) => {
            const Icon = ICONS[item.icon] || Cpu;
            return (
              <div
                key={item.id}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="font-sans text-xs text-white/50">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
