"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { TbFolderPlus } from "react-icons/tb";
import { BiRename } from "react-icons/bi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

interface TreeNodeProps {
  label: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
}

const TreeNode: React.FC<TreeNodeProps> = ({
  label,
  children,
  isExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Function to handle right-click event
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default context menu from appearing

    // Set the position of the custom context menu based on mouse coordinates
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  // Function to handle click outside the context menu to close it
  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".context-menu")) {
      setShowContextMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="tree-node">
      <div onContextMenu={handleRightClick} className="tree-node-header flex items-center gap-2 cursor-pointer">

          <button
            className="toggle-btn p-1"
            onClick={() => setExpanded(!expanded)}
            
            aria-expanded={expanded}
          >
            {expanded ? <FcOpenedFolder size={20} /> : <FcFolder size={20} />}
          </button>
        
        <span className="tree-label text-sm">{label}</span>
      </div>

      {/* Context Menu */}
      {showContextMenu && (
        <div
          className="context-menu absolute bg-white border shadow-md p-2 rounded-lg z-10"
          style={{ left: menuPosition.x, top: menuPosition.y }}
        >
          <ul>
            <li className="p-2 hover:bg-gray-200 flex items-center gap-x-2">
              <TbFolderPlus className="text-yellow-500" size={20} /> Create
              Folder
            </li>
            <li className="p-2 text-red-600 hover:bg-gray-200 flex items-center gap-x-2">
              <MdDelete className="text-red-500" size={20}/>
              Delete
            </li>
            <li className="p-2 hover:bg-gray-200 flex items-center gap-x-2">
              <BiRename className="text-blue-500" size={20} />
              Rename
            </li>
          </ul>
        </div>
      )}

      <div
        className={`tree-children overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ height: expanded ? "auto" : "0px" }}
      >
        <div className="pl-4">{children}</div>
      </div>
    </div>
  );
};

const GroupedTreeList = () => {
  return (
    <div className="grouped-tree-list h-full">
      <TreeNode label="Assets" isExpanded>
        <TreeNode label="CSS" isExpanded>
          <TreeNode label="Main">
            <div className="file text-sm flex items-center gap-1"><PiMicrosoftExcelLogoFill className="text-green-800" size={20}/> docs.xlsx</div>
          </TreeNode>
          <TreeNode label="Tailwind">
            <div className="file text-sm">input.css</div>
          </TreeNode>
        </TreeNode>
        <TreeNode label="JS">
          
        </TreeNode>
      </TreeNode>
    </div>
  );
};

export default GroupedTreeList;
