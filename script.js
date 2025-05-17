$(document).ready(function () {
  // Initialize DataTable with settings to show all rows and minimize spacing
  var table = $("#storyTable").DataTable({
    paging: false, // Disable pagination to show all rows
    scrollX: true, // Enable horizontal scrolling
    scrollY: false, // Disable vertical scrolling
    autoWidth: false, // Allow manual column width control
    responsive: true, // Enable responsive behavior
    dom: "lfrti", // Custom dom to remove pagination controls
    info: false, // Hide info about showing x of y entries
    compact: true, // Use compact styling
    className: "compact",
    order: [[0, "asc"]], // Sort by first column (story number)
    columnDefs: [
      { className: "dt-center", targets: "_all" }, // Center all column content
      {
        width: "30px",
        targets: [
          0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        ],
      }, // Set narrow width for checkmark columns
      { visible: false, targets: [3] }, // Hide the Notes/Tags column (index 3)
    ],
    language: {
      search: "_INPUT_",
      searchPlaceholder: "Search by story details, keywords, principles...",
    },
  });

  // Filter buttons functionality
  $(".filter-btn").on("click", function () {
    const filter = $(this).data("filter");

    if (filter === "conflict") {
      table.column(4).search("✅").draw();
    } else if (filter === "failure") {
      table.column(5).search("✅").draw();
    } else if (filter === "reset") {
      table.search("").columns().search("").draw();
    }
  });

});

// Add highlighting effect when clicking on story links
$(document).ready(function () {
  // Handle clicks on story links in the table
  $("#storyTable").on("click", "a", function (e) {
    // Get the target story section id
    const targetId = $(this).attr("href");

    // Remove any existing highlight classes
    $(".story-section").removeClass("highlight-animation");

    // Add highlight class to the target story section
    setTimeout(function () {
      $(targetId).addClass("highlight-animation");
    }, 50); // Small delay to ensure the browser has scrolled to the element
  });

  // Also handle direct links from URL with hash
  if (window.location.hash) {
    const targetId = window.location.hash;
    setTimeout(function () {
      $(targetId).addClass("highlight-animation");
    }, 100);
  }
});

// Back to Top button functionality
$(document).ready(function () {
  // Show/hide button based on scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  // Smooth scroll to top when button is clicked
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });
});
