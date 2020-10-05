export const submitPeople = async (people) => {
  return await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(people),
  });
};
