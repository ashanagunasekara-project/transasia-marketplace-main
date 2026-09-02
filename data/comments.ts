import type { Comment } from "@/types/misc";

export type { Comment } from "@/types/misc";

export const dummyBlogComments: Comment[] = [
  {
    id: "c-1",
    author: "Cameron Williamson",
    imgSrc: "/assets/images/blog-details/blog-commenter-1.webp",
    date: "Nov 23, 2018 at 12:23 pm",
    content: "Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.",
    replies: [
      {
        id: "c-1-r-1",
        author: "John Due",
        imgSrc: "/assets/images/blog-details/blog-commenter-2.webp",
        date: "Nov 23, 2018 at 12:23 pm",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lobortis cursus lacinia. Vestibulum vitae leo id diam pellentesque ornare.",
      },
    ],
  },
  {
    id: "c-2",
    author: "Rafin Shuvo",
    imgSrc: "/assets/images/blog-details/blog-commenter-3.webp",
    date: "Nov 23, 2018 at 12:23 pm",
    content: "Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.",
  },
];
