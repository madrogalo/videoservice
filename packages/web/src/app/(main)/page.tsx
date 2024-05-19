import { getAllCourses } from "../(server)/api";
import { CoursePreview } from "../(components)/coursePreview/coursePreview";
import { Pagination } from "../shared/pagination/pagination";

const COURSES_PER_PAGE = 2;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number(parseInt(searchParams["page"]) || "1");

  const allCourses = await getAllCourses();
  const cousesToRender = allCourses.slice(
    (page - 1) * COURSES_PER_PAGE,
    page * COURSES_PER_PAGE
  );

  return (
    <>
      <h1>All courses</h1>
      <h2>{page}</h2>
      <ul>
        {cousesToRender.map((course) => (
          <li key={course.id}>
            <CoursePreview id={course.id} title={course.title} />
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={page}
        pagesNumber={Math.ceil(allCourses.length / COURSES_PER_PAGE)}
      />
    </>
  );
}
