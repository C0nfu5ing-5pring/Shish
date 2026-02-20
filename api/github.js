export default async function handler(req, res) {
  const query = `
    {
      user(login: "C0nfu5ing-5pring") {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              name
              url
              homepageUrl
              description
            }
          }
        }
      }
    }
  `;

  const ghRes = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await ghRes.json();
  res.status(200).json(data);
}
