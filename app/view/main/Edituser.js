/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.Edituser', {
    extend: 'Ext.form.Panel',
    xtype: 'Edtuser',
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
        'Inventori.view.main.MainController',
        'Inventori.view.main.MainModel'

    ],
    controller: 'main',
    viewModel: 'main',
    width: 300,
            height: 440,
            scrollable: true,
    shadow: true,
    cls: 'demo-solid-background',    
    id: 'euserfrm',
    items:[{
            xtype: 'fieldset',
            id: 'edtuser',
            title: 'Edit User',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'id_user',
                    name: 'id_user',
                    hidden: true
                },{
                    xtype: 'textfield',
                    id: 'unamee',
                    name: 'unamee',
                    label: 'Username',
                    placeHolder: 'Username',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    id: 'pwde',
                    name : 'pwde',
                    label: 'Password',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    id: 'namause',
                    name: 'namause',
                    label: 'Nama',
                    placeHolder: 'Nama',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'selectfield',
                    id: 'aksese',
                    name: 'aksese',
                    label: 'Hak Akses',
                    placeHolder: 'Pilih Hak Akses..',
                    options: [
                        {
                            text: 'Admin',
                            value: '1'
                        },
                        {
                            text: 'Staff',
                            value: '2'
                        }
                        
                    ]
                },
                {
                    xtype: 'textfield',
                    id: 'kontake',
                    name: 'kontake',
                    label: 'Kontak',
                    placeHolder: '0812XXXXXXXX',
                    required: true,
                    clearIcon: true
                },        
                {
                    docked: 'bottom',
                    defaults: {
                    xtype: 'button',
                    style: 'margin: 1em',
                    flex: 1
                    },
                    items:[
                    {
                        xtype: 'button',
                        text: 'OK',
                        ui: 'action',
                        handler: 'editUser'
                    }
                    ,{
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('euserfrm').reset();
                        }

                    }
                    
                    ]
                }
                


                    ]
    }]
    
});