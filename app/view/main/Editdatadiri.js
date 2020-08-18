/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.Editdatadiri', {
    extend: 'Ext.form.Panel',
    xtype: 'edtdatadiri',
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
    scrollable: true,
    shadow: true,
    cls: 'demo-solid-background',    
    id: 'euserfrm1',
    items:[{
            xtype: 'fieldset',
            id: 'edtuser1',
            title: 'Edit User',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'id_user1',
                    name: 'id_user1',
                    hidden: true
                },{
                    xtype: 'textfield',
                    id: 'unamee1',
                    name: 'unamee1',
                    label: 'Username',
                    placeHolder: 'Username',
                    disabled:true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    id: 'pwde1',
                    name : 'pwde1',
                    label: 'Password',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    id: 'namause1',
                    name: 'namause1',
                    label: 'Nama',
                    placeHolder: 'Nama',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'selectfield',
                    id: 'aksese1',
                    name: 'aksese1',
                    label: 'Hak Akses',
                    placeHolder: 'Pilih Hak Akses..',
                    //disabled: true,
                    options: [
                        {
                            text: 'Admin',
                            value: '1'
                        },
                        {
                            text: 'Staff',
                            value: '2'
                        },
                        {
                            text: 'Reporter',
                            value: '3'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    id: 'kontake1',
                    name: 'kontake1',
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
                        handler: 'editUser1' //err
                    }
                    ,{
                        xtype: 'button',
                        text: 'Keluar',
                        ui: 'action',
                        handler: 'onPencet'

                    }
                    
                    ]
                }
                


                    ]
    }]
    
});