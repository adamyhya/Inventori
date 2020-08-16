/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.Editbarang', {
    extend: 'Ext.form.Panel',
    xtype: 'Edtbarang',
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
            height: 400,
            scrollable: true,
    shadow: true,
    cls: 'demo-solid-background',    
    id: 'ebarangfrm',
    items:[{
            xtype: 'fieldset',
            id: 'edtbrg',
            title: 'Edit Barang',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'idbar',
                    name: 'idbar',
                    hidden: true     
                },
                {
                    xtype: 'textfield',
                    id: 'namaeb',
                    name: 'namaeb',
                    label: 'Nama Barang',
                    placeHolder: 'Nama Barang',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'selectfield',
                    label: 'Nama Kategori',
                    id: 'namaekat',
                    name: 'namaekat',
                    valueField: 'id_kategori',
                    displayField: 'nama_kategori',
                    bind: {
                        store: 'liskategori'
                    }                
                },         
                {
                    xtype: 'spinnerfield',
                    id: 'jumlaheb',
                    name: 'jumlaheb',
                    label: 'Jumlah',
                    minValue: 0,
                    maxValue: 9999,
                    clearable: true,
                    stepValue: 1,
                    cycle: true
                },
                {
                    xtype: 'selectfield',
                    label: 'Nama Satuan',
                    id: 'namaes',
                    name: 'namaes',
                    valueField: 'id_satuan',
                    displayField: 'nama_satuan',
                    bind: {
                        store: 'lissatuan'
                    }
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
                        handler: 'editBarang'
                    }
                    ,{
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('ebarangfrm').reset();
                        
                        }

                    }
                    
                    ]
                }
                


                    ]
    }]
    
});