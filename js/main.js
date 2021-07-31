$(function(){
    
    var form = $("#registration");
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {}
    });
    // Applied form steps
    form.children("#form-total").steps({
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
        },
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert("Submitted!");
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
