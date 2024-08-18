import { HoverEffect } from "@/components/ui/card-hover-effect";

export function LatestJobs() {
  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-5xl font-extrabold text-center text-[#10B981] mb-4 leading-tight">
          Latest Job Openings from Top Companies
        </div>
        <HoverEffect items={jobs} />
      </div>
    </div>
  );
}

export const jobs = [
  {
    title: "Software Engineer at Stripe",
    description:
      "Join Stripe as a Software Engineer and help build economic infrastructure for the internet. Work on cutting-edge projects and make an impact in the world of finance.",
    link: "https://stripe.com/jobs",
  },
  {
    title: "Data Scientist at Netflix",
    description:
      "Netflix is looking for a Data Scientist to analyze large datasets and drive decisions that impact our streaming service. Use your skills to shape the future of entertainment.",
    link: "https://netflix.com/jobs",
  },
  {
    title: "Product Manager at Google",
    description:
      "Google is hiring a Product Manager to lead the development of innovative products. Collaborate with cross-functional teams and bring your vision to life.",
    link: "https://careers.google.com/jobs",
  },
  {
    title: "UX Designer at Meta",
    description:
      "Meta seeks a UX Designer to create intuitive user experiences for its platforms. Design engaging interfaces and contribute to building products that connect people.",
    link: "https://meta.com/careers",
  },
  {
    title: "Cloud Engineer at Amazon",
    description:
      "Amazon is in search of a Cloud Engineer to work on its scalable cloud infrastructure. Help develop and maintain services that support millions of customers worldwide.",
    link: "https://amazon.jobs/en/jobs",
  },
  {
    title: "Front-End Developer at Microsoft",
    description:
      "Microsoft is hiring a Front-End Developer to build and enhance its web applications. Work on high-impact projects and collaborate with a talented team.",
    link: "https://careers.microsoft.com/jobs",
  },
];
