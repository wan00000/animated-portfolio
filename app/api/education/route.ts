// app/api/education/route.ts
import { NextResponse } from "next/server";
import db from "@/lib/db";

interface Education {
  id: number;
  title: string;
  institution: string;
  description: string;
  period_start: string;
  period_end: string;
  img: string;
  courseWork: string[];
  period: string; // formatted version
}

export async function GET() {
  try {
    const [educationRows] = await db.query("SELECT * FROM education");
    const [courseRows] = await db.query("SELECT * FROM course_work");

    const educationWithCourses: Education[] = (educationRows as any[]).map((edu) => {
      const courseWork = (courseRows as any[])
        .filter((c) => c.education_id === edu.id)
        .map((c) => c.course_name);

      return {
        ...edu,
        period: formatPeriod(edu.period_start, edu.period_end),
        courseWork,
      };
    });

    return NextResponse.json(educationWithCourses);
  } catch (err) {
    console.error("Error fetching education data:", err);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

function formatPeriod(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const format = (d: Date) =>
    d.toLocaleString("default", { month: "short", year: "numeric" });
  return `${format(startDate)} - ${format(endDate)}`;
}
