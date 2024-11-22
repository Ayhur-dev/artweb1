// function to toggle the sidebr
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('expand'); 
}

 // Toggle the sidebar on button click
 document.addEventListener("DOMContentLoaded"), () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");


    toggleBtn.addEventListener("click"), function() {
      sidebar.classList.toggle("expanded");
      saveSidebarState();
    }
    
    document.addEventListener("click"), (event) => {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target) && sidebar.classList.contains("expanded")) {
            sidebar.classList.remove("expanded");
            saveSidebarState();
        }

        function saveSidebarState() {
            localStorage.setItem("sidebar-expanded", sidebar.classList.contains("expanded"));
        }


    

    }

    // Load Sidebar state
    function loadSidebarState() {
        const isExpanded = localStorage.getItem("sidebar-expanded") === "true";
        if (isExpanded) {
            sidebar.classList.add("expanded");
        }
    }

    // Load Sidebar state on page load
    loadSidebarState();
 };
