{
  function getDisplayName(name: string | null | undefined): string {
    const result = name ?? "Anonymous";
    return result;
  }

  console.log(getDisplayName("Mukit"));
  console.log(getDisplayName(null));
  console.log(getDisplayName(undefined));
}
