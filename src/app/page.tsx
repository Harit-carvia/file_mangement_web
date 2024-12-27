import ContentTable from "@/components/ContentTable";
import GroupedTreeList from "@/components/GroupedTreeList";


const treeData = [
  {
    label: "Assets",
    children: [
      {
        label: "CSS",
        children: [
          {
            label: "Main",
            children: [
              { label: "docs.css", isFile: true },
              { label: "README.txt", isFile: true },
            ],
          },
          {
            label: "Tailwind",
            children: [
              { label: "input.css", isFile: true },
            ],
          },
        ],
      },
      {
        label: "JS",
        children: [
          { label: "app.js", isFile: true },
        ],
      },
    ],
  },
];

export default function Home() {
  return (
   <div>
    <ContentTable/>
   </div>
  );
}
