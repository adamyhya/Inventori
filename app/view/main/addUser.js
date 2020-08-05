/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.addUser', {
    extend: 'Ext.form.Panel',
    xtype: 'Tbhuser',
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
    shadow: true,
    cls: 'demo-solid-background',
    id: 'tuserfrm',
    items:[{
            xtype: 'fieldset',
            id: 'fieldset7',
            title: 'Tambah Pengguna',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'uname',
                    label: 'Username',
                    placeHolder: 'Username',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    name : 'pwd',
                    label: 'Password',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    name: 'namaus',
                    label: 'Nama',
                    placeHolder: 'Nama',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'selectfield',
                    name: 'akses',
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
                    name: 'kontak',
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
                        scope: this,
                        listeners:{
                            tap: 'tambahB'
                        }

                    },
                    {
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('tuserfrm').reset();
                    }
                    }
                    ]
                }
                


                    ]
    }]
    
});