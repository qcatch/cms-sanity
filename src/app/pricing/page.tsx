import PriceCard from "@/components/PriceCard";

export default function Page() {
  const data = [
    {
      title: "BASIC",
      price: "$129",
      period: "/year",
      features: ["Unlimited updates", "Git repository", "npm installation"],
    },
    {
      title: "ADVANCED",
      price: "$299",
      period: "/year",
      features: [
        "Unlimited updates",
        "Git repository",
        "npm installation",
        "Code examples",
        "Premium snippets",
      ],
    },
    {
      title: "ENTERPRISE",
      price: "$499",
      period: "/year",
      features: [
        "Unlimited updates",
        "Git repository",
        "npm installation",
        "Code examples",
        "Premium snippets",
        "Premium support",
        "Drag&Drop builder",
      ],
    },
  ];

  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
            {data.map((item, index) => (
              <div className="mb-6 lg:mb-0" key={index}>
                <PriceCard {...item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
