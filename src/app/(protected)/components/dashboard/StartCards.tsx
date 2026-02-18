import React from "react";
import { StatCard } from "./StatCard";
import { Building2, ChefHat, Salad, Users } from "lucide-react";

export const StartCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Active Companies"
        value="07"
        icon={Building2}
        percentage="+12%"
      />
      <StatCard
        title="Total Employees"
        value="2,349"
        icon={Users}
        percentage="+4%"
      />
      <StatCard
        title="Active Vendors"
        value="10"
        icon={ChefHat}
        percentage="+4%"
      />
      <StatCard
        title="Delivering Today"
        value="264"
        icon={Salad}
        percentage="+12%"
      />
    </div>
  );
};

export default StartCards;
