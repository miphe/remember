jQuery(function($){

    /**
     * Registration functions
     */
    $('form#register')
        .on('submit', function(e, validated){
            var form = $(this);
            if ( validated ) {
                return true;
            }

            e.preventDefault();

            // Check password length
            if ( $('#field-password').val().length < 8 ) {
                alert('Password length should be 8 characters or more');
                return false;
            }

            // Check password confirmation
            if ( $('#field-confirm-password').val() !== $('#field-password').val() ) {
                alert('Password confirmation does not match password');
                return false;
            }


            // Check email availability
            $.post('exists', { field: 'email', value: $('#field-email').val() })
                .then(function(json){
                    if ( json.exists ) {
                        alert('This email exists already in our database, registered before? :)');
                    } else {
                        form.trigger('submit', [true]);
                    }
                });
        });

    $(':password:first').pwstrength({
        usernameField: '#field-email',
        showVerdictsInsideProgressBar: true
    });

});