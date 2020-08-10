/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.addSatuan', {
    extend: 'Ext.form.Panel',
    xtype: 'Tbhsatuan',
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
    id: 'tsatuanfrm',
    items:[{
            xtype: 'fieldset',
            id: 'fieldset5',
            title: 'Tambah Satuan',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'namasa',
                    name: 'namasa',
                    label: 'Nama Satuan',
                    placeHolder: 'Nama Satuan',
                    autoCapitalize: true,
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
                        handler: 'addSatuan'

                    },
                    {
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('tsatuanfrm').reset();
                    }
                    }
                    ]
                }
                


                    ]
    }]
    
});