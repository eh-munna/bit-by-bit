const normalizedData = users.map((user) => {
  return {
    ...user,
    posts: [
      ...posts.map((post) => {
        return { ...post };
      }),
    ],
  };
});