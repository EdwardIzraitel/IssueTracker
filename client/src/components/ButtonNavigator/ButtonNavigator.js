import "./ButtonNav.css";

export const createButtonElements = (
  currentProjectPage,
  totalPageNumbers,
  setCurrentPage
) => {
  const buttonElements = [];
  buttonElements.push(
    <button
      onClick={() =>
        changeCurrentPage(
          currentProjectPage - 1,
          currentProjectPage,
          totalPageNumbers,
          setCurrentPage
        )
      }
    >
      &#60;
    </button>
  );
  buttonElements.push(
    <button
      id="active1"
      className="active"
      onClick={() =>
        changeCurrentPage(
          1,
          currentProjectPage,
          totalPageNumbers,
          setCurrentPage
        )
      }
    >
      1
    </button>
  );
  for (let index = 2; index <= totalPageNumbers; index++) {
    buttonElements.push(
      <button
        key={index}
        id={"active" + index}
        onClick={() =>
          changeCurrentPage(
            index,
            currentProjectPage,
            totalPageNumbers,
            setCurrentPage
          )
        }
      >
        {index}
      </button>
    );
  }

  buttonElements.push(
    <button
      onClick={() =>
        changeCurrentPage(
          currentProjectPage + 1,
          currentProjectPage,
          totalPageNumbers,
          setCurrentPage
        )
      }
    >
      &#62;
    </button>
  );
  return buttonElements;
};

const changeCurrentPage = (
  newPageNumber,
  currentPageNumber,
  totalPageNumbers,
  setCurrentPage
) => {
  if (newPageNumber < 1) newPageNumber = 1;
  if (newPageNumber > totalPageNumbers) newPageNumber = totalPageNumbers;
  document
    .getElementById(`active${currentPageNumber}`)
    .classList.toggle("active");
  setCurrentPage((prev) => newPageNumber);
  document.getElementById(`active${newPageNumber}`).classList.toggle("active");
};

export const findTotalPageNumbers = (
  items,
  setTotalPageNumbers,
  MAX_ITEMS_PER_PAGE
) => {
  setTotalPageNumbers(Math.ceil(items.length / MAX_ITEMS_PER_PAGE));
};

export const findDisplayableItems = (
  setItemsOnCurrentPage,
  currentPage,
  items,
  MAX_ITEMS_PER_PAGE
) => {
  setItemsOnCurrentPage((prev) => {
    return [];
  });
  let tempProjects = [];

  for (
    var index = currentPage * MAX_ITEMS_PER_PAGE - MAX_ITEMS_PER_PAGE;
    index <= currentPage * MAX_ITEMS_PER_PAGE - 1;
    index++
  ) {
    if (index >= items.length) break;
    tempProjects.push(items[index]);
  }
  setItemsOnCurrentPage((prev) => {
    return [...tempProjects];
  });
};
