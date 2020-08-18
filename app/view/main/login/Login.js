/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Inventori.view.main.MainController' 
    ],
    controller: 'main',
    viewModel: 'main',
    shadow: true,
    styleHtmlContent: true,
    title:'Aplikasi Inventori Fakultas Teknik',
    cls: 'demo-solid-background',
    id: 'basicform',
    
    items: [
        {
            
            xtype: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Logo_UIR-cdr.png/1200px-Logo_UIR-cdr.png',
            width: '250',
            height: '250',
            docked : 'top',        
            style: {
        'display': 'block',
        'margin': 'auto'
    }
        },
        {

            xtype: 'fieldset',
            id: 'fieldset1',
            title: 'Login',

            defaults: {
                labelWidth: '35%',
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'uname',
                    name: 'uname',
                    label: 'Username',
                    placeHolder: 'Username',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    id: 'pwd',
                    name : 'pwd',
                    label: 'Password',
                    required: true,
                    clearIcon: true
                },
                
                {
                    docked: 'bottom',
                    
                    items:[
                    {
                        xtype: 'button',
                        text: 'Login',
                        ui: 'action',
                        handler: 'logins'
                    }
                    ]
                }
            
            ]

        }
    ]

});