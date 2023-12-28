"use client";
import { useState, useEffect } from "react";
import React from "react";
import Blogs from "../components/blogs/blogs";
import "../../styles/dashboard.css";
import { useAuth } from "@/app/context/store";
export interface BlogPublish {
  id: number;
  title: string;
  description: string;
  image: string;
  avatar: string;
}

export default function Dashboard() {
  const { publishedData, setPublishedData, searchTerm, tag } = useAuth();

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("publishedData") || "[]"
    );
    setPublishedData(storedData);
  }, []);
  return (
    <main>
      <Blogs
        publishedData={publishedData}
        searchTerm={searchTerm}
        selectedTopic={tag}
      />
    </main>
  );
}
