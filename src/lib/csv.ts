import Papa from "papaparse";

export async function fetchAndParseCSV(
  url: string | undefined,
  fallbackCsvText: string,
): Promise<Record<string, string>[]> {
  let csvText = fallbackCsvText;

  if (url) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 3600 },
      });
      if (response.ok) {
        csvText = await response.text();
      } else {
        console.warn(
          `Failed to fetch CSV from ${url}, using fallback data. Status: ${response.status}`,
        );
      }
    } catch (error) {
      console.warn(
        `Failed to fetch CSV from ${url}, using fallback data. Error:`,
        error,
      );
    }
  } else {
    console.warn("No CSV URL provided, using fallback data.");
  }

  return new Promise((resolve, reject) => {
    Papa.parse<Record<string, string>>(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error: Error) => reject(error),
    });
  });
}
