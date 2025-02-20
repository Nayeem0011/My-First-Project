document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "Portfolio Website", link: "#" },
        { name: "E-commerce Platform", link: "#" },
        { name: "Blog CMS", link: "#" },
        { name: "To-Do List App", link: "#" }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = project.name;
        a.href = project.link;
        a.target = "_blank";
        li.appendChild(a);
        projectList.appendChild(li);
    });
});