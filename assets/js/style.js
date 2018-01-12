
/*
 * Styling and animation for StudyBuddy
 */

// Styling variables (see also _variables.scss)
const primaryLight = "#52c7b8";

$(document).on("click", ".expander", function() {
  const rowId = $(this).closest('tr').attr('id');
  const rowDiv = rowId + "-div";

  if ($(this).closest('tr').next('tr').val('class').is('.description')) {
    $("#"+rowDiv).slideUp(500, function() {
      $("#"+rowId+"-description").remove();
    });
  }
  else {
    const currentDescription = $(this).closest('tr').attr('data-description');

    // Expand the row
    $(this).closest('tr').after(`
      <tr id="${rowId}-description" class="description">
        <td colspan="5">
          <div id="${rowDiv}" style="display: none;">
            <p><strong>Description: </strong>${currentDescription}</p>
          </div>
        </td>
      </tr>
    `);
    $("#"+rowId+"-description").css('background-color',primaryLight);
    $("#"+rowId+"-description").children('td').css('padding','0 10px');
    $("#"+rowDiv).slideDown();
  }

  // Display weather
  if ($("#weather-section").css("display") === "none") {
    $("#weather-section").slideDown();
  }

});

// Click CREATE NEW MEETING
$("#add-new").on("click", function() {
  // Show the form
  $("#add-form").slideToggle(600);
});

 /*
  * 3-day forecast:
  * Day , High , Low , conditions icon
  * Sat , 54F , 32F , icon
  * Sun , 54F , 32F , icon
  * Mon , 54F , 32F , icon
  * Tue , 54F , 32F , icon
  */
