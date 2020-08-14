/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.Editsatuan', {
    extend: 'Ext.form.Panel',
    xtype: 'Edtsatuan',
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
    id: 'esatuanfrm',
    items:[{
            xtype: 'fieldset',
            id: 'edtsatuan',
            title: 'Edit Satuan',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'id_satuane',
                    name: 'id_satuane',
                    hidden: true     
                },
                {
                    xtype: 'textfield',
                    id: 'nama_satuane',
                    name: 'nama_satuane',
                    label: 'Nama Satuan',
                    placeHolder: 'Nama Satuan',
                    autoCapitalize: true,
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
                        handler: 'editSatuan'
                    }
                    ,{
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('esatuanfrm').reset();
                        }

                    }
                    
                    ]
                }
                


                    ]
    }]
    
});