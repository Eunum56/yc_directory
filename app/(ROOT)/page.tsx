import StartUpCard from "@/components/StartUpCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Muzammil" },
      _id: 1,
      description: "This is a great card",
      category: "Robots",
      title: "Robotics",
      image:
        "https://unsplash.com/photos/a-gray-cat-laying-on-top-of-a-red-couch-CAojmNTZebs",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup, connect with entreprenuers
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post) => <StartUpCard key={post._id} post={post} />)
          ) : (
            <p className="no-results">No StartUp Found!</p>
          )}
        </ul>
      </section>
    </>
  );
}
