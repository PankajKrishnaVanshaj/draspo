"use client";
import Whiteboard from "@/components/Dashboard/Whiteboard";
import { useState } from "react";

const Dashboard = () => {
  const [triggerSave, setTriggerSave] = useState(false);

  return (
    <>
      <div>
        <Whiteboard />
      </div>
    </>
  );
};

export default Dashboard;
