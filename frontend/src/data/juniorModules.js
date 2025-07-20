const juniorModules = [
  {
  title: "Programming Fundamentals",
  languageOptions: ["Python", "Java"],

  topics: {
    Python: [
      { name: "Basics" },
      { name: "Variables & Data Types" },
      { name: "Conditionals & Loops" },
      { name: "Functions" },
      { name: "Lists & Tuples" },
      { name: "Dictionaries" },
      { name: "String Manipulation" },
      
    ],
    Java: [
      { name: "Basics" },
      { name: "Data Types & Variables" },
      { name: "Operators" },
      { name: "Control Flow (if, switch)" },
      { name: "Loops (for, while)" },
      { name: "Methods" },
      { name: "Arrays & Strings" },
      { name: "OOP Basics (Classes, Objects)" }
    ]
  },

  resources: [
    {
      label: "Python for Beginners",
      link: "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&si=cfFUqLf7yMRGlqAl",
      type: "YouTube"
    },
    {
      label: "Java Full Course",
      link: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
      type: "YouTube"
    },
    {
      label: "snakify for python(Strongly suggested)",
      link: "https://snakify.org/en/",
      type: "Docs"
    },
    {
      label: "w3 schools-java ",
      link: "https://www.w3schools.com/java/",
      type: "Docs"
    },
    {
      label: "Python Practice – HackerRank",
      link: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
      type: "Practice"
    },
    {
      label: "Java Practice – CodingBat",
      link: "https://codingbat.com/java",
      type: "Practice"
    },
    {
      label: "online compiler for python",
      link: "https://www.programiz.com/python-programming/online-compiler/",
      type: "Practice"
    },
    {
      label: "online compiler for java",
      link: "https://www.programiz.com/java-programming/online-compiler/",
      type: "Practice"
    }
  ]
}
,
  
  {
  title: "Web Development Basics",
  topics: [
    {
      name: "HTML",
      problems : [
        { label: "HTML Basics – W3Schools", link: "https://www.w3schools.com/html/html_intro.asp" }
      ]
    },
    {
      name: "CSS",
      problems : [
        { label: "CSS Tutorial – W3Schools", link: "https://www.w3schools.com/css/" }
      ]
    },
    {
      name: "JavaScript",
      problems : [
        { label: "JS Basics-w3Schools", link: "https://www.w3schools.com/js/" }
      ]
    } 
  ],
  resources : [
    {
      label:"html",
      link:"https://youtu.be/BsDoLVMnmZs?si=u47R1tcPtWBH0gxN",
      type:"YouTube"
    },
    {
      label:"css",
      link:"https://youtu.be/Edsxf_NBFrw?si=XFJkN03wwqQ0vM0m",
      type:"YouTube"
    },
    {
      label:"js",
      link:"https://youtu.be/W6NZfCO5SIk?si=3GByN7C0KbBKHFh6",
      type:"YouTube"
    },
    {
    label: "JS Project Ideas – Great Learning",
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/javascript-projects",
    type: "Docs"
  }
    

  ],
  projects: [
  "To-Do List",
  "Portfolio Website",
  "Dice Roller",
  "Digital Clock",
  "Buy and Sell platform"
],
  

},

  {
  title: "Intro to DSA",
  topics: [
    {
      name: "Arrays",
      problems: [
        { label: "Array Rotation – GFG", link: "https://www.geeksforgeeks.org/array-rotation/" },
        { label: "Find Duplicate – Leetcode", link: "https://leetcode.com/problems/find-the-duplicate-number/" },
        { label: "Largest Element in an Array", link: "https://www.geeksforgeeks.org/find-largest-element-in-array/" },
        { label: "Second Largest Element without sorting", link: "https://www.geeksforgeeks.org/second-largest-element-array/" },
        { label: "Check if Array is Sorted", link: "https://www.geeksforgeeks.org/check-if-array-is-sorted-and-rotated/" },
        { label: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        { label: "Left Rotate Array by One", link: "https://www.geeksforgeeks.org/array-rotation/" },
        { label: "Move Zeros to End", link: "https://leetcode.com/problems/move-zeroes/" },
        { label: "Find Missing Number", link: "https://leetcode.com/problems/missing-number/" },
        { label: "Maximum Consecutive Ones", link: "https://leetcode.com/problems/max-consecutive-ones/" },
        { label: "Find Unique Number (others appear twice)", link: "https://leetcode.com/problems/single-number/" },
        { label: "Longest Subarray with Given Sum K (Positives)", link: "https://www.geeksforgeeks.org/longest-sub-array-sum-k/" }
      ]
    },
    {
      name: "Sorting",
      problems: [
        { label: "Bubble Sort", link: "https://www.geeksforgeeks.org/bubble-sort/", difficulty: "Easy" },
        { label: "Selection Sort", link: "https://www.geeksforgeeks.org/selection-sort/", difficulty: "Easy" },
        { label: "Insertion Sort", link: "https://www.geeksforgeeks.org/insertion-sort/", difficulty: "Easy" }
      ]
    },
    {
      name: "Strings",
      problems: [
        { label: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Easy" },
        { label: "Largest Odd Number in a String", link: "https://leetcode.com/problems/largest-odd-number-in-string/", difficulty: "Easy" },
        { label: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy" },
        { label: "Isomorphic Strings", link: "https://leetcode.com/problems/isomorphic-strings/", difficulty: "Easy" },
        { label: "String Rotation Check", link: "https://www.geeksforgeeks.org/check-if-a-string-is-rotated-by-two-places/", difficulty: "Medium" },
        { label: "Check for Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" }
      ]
    }
  ],
  resources: [  
    {
      label: "Arrays in DSA – Apna College",
      link: "https://www.youtube.com/watch?v=WR31ByTzAVQ",
      type: "YouTube"
    },
    {
      label: "Strings in DSA – Love Babbar",
      link: "https://www.youtube.com/watch?v=1xNbjMdbjug",
      type: "YouTube"
    },
    {
      label: "Sorting Algorithms – MyCodeSchool",
      link: "https://www.youtube.com/watch?v=PgBzjlCcFvc",
      type: "YouTube"
    }
  ]
},

  {
    title: "Intro to Machine Learning",
    
    
    resources: [
      { label: "Krish Naik (YouTube)", link: "https://www.youtube.com/user/krishnaik06", type: "YouTube" },
      { label: "FreeCodeCamp ML", link: "https://www.youtube.com/watch?v=Gv9_4yMHFhI", type: "YouTube" },
      { label: "Kaggle Titanic", link: "https://www.kaggle.com/competitions/titanic", type: "Practice" },
      { label: "Begginer ML projects (recommanded to do)", link: "https://youtu.be/iIkJrwVUl1c?si=TbLntxu4FGeo7cos", type: "YouTube" },
      { label: "googleColab", link: "https://colab.research.google.com/", type: "Practice" }
    ]
  }
];

export default juniorModules;
