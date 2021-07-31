$(function(){
    
    // Applied form steps
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : '<small>Previous</small>',
            next : '<small>Next</small>',
            finish : '<small>Save</small>',
            current : ''
        }
    });
    
    // Applied calander
    $('#dob').dcalendarpicker();
});

function showDesc(id)
{
    $(id).show();
}

function hideDesc(id)
{
    $(id).hide();
}
