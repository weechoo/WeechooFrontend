import { Card } from "@/components/ui/card";
import { companies } from "@/constants/dashboard";
import { ArrowRight } from "lucide-react";

export const ActiveCompanies = () => {
  return (
    <Card className="px-6 py-10 rounded-2xl border border-[#FFC9C9] bg-linear-to-r from-[#FEF2F2] to-[#FFF7ED] h-full flex flex-col">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-neutral-900">Active Companies</h3>
        <p className="text-neutral-500 text-xs">
          Top 4 orders by employee orders
        </p>
      </div>

      <div className="flex flex-col gap-4 flex-1 mt-2">
        {companies.map((company, i) => (
          <div
            key={i}
            className="flex flex-col border-b border-[#FFB86A] last:border-b-0 pb-3"
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-bold text-[30px]"
            >
              0{i + 1}
            </span>

            <div className="flex flex-col gap-1">
              <p className="font-bold text-secondary-100">{company.name}</p>

              <p className="text-xs">
                <span className="text-[#00A63E]">{company.region}</span>
                <span> | </span>
                <span className="text-neutral-500">
                  {company.employees} Employees
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-2 text-neutral-500 text-[10px] gap-1">
        <button className="hover:underline">See all</button>
        <ArrowRight className="w-3 h-3" />
      </div>
    </Card>
  );
};
