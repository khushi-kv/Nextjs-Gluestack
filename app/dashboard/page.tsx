"use client";
import { useState, useEffect } from "react";
import React from "react";
import Blogs from "../components/blogs/blogs";
import "../../styles/dashboard.css";
export interface BlogPublish {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Dashboard() {
  const [publishedData, setPublishedData] = useState<BlogPublish[]>([]);

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("publishedData") || "[]"
    );
    setPublishedData(storedData);
  }, []);
  return (
    <main>
      <Blogs publishedData={publishedData} />
    </main>
  );
}
