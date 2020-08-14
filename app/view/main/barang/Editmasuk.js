/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.Editmasuk', {
    extend: 'Ext.form.Panel',
    xtype: 'Edtmasuk',
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
    id: 'emasukfrm',
    items:[{
            xtype: 'fieldset',
            id: 'edtmasuk',
            title: 'Edit Barang Masuk',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'id_brg_masuk',
                    name: 'id_brg_masuk',
                    hidden: true     
                },
                {
                    xtype: 'textfield',
                    id: 'id_barangm',
                    name: 'id_barangm',
                    hidden: true     
                },
                {
                    xtype: 'textfield',
                    id: 'nama_brg_masuk',
                    name: 'nama_brg_masuk',
                    label: 'Nama Barang',
                    placeHolder: 'Nama Barang',
                    autoCapitalize: true,
                    disabled: true,
                    
                },
                {
                    xtype: 'spinnerfield',
                    id: 'jumlah_masuk',
                    name: 'jumlah_masuk',
                    label: 'Jumlah',
                    minValue: 0,
                    maxValue: 9999,
                    clearable: true,
                    stepValue: 1,
                    cycle: true
                },
                {
                    xtype: 'textfield',
                    id: 'ket_brgmasuk',
                    name: 'ket_brgmasuk',
                    label: 'Keterangan',
                    placeHolder: 'Tulis Keterangan',
                    clearIcon: true
                },
                {
                    xtype: 'selectfield',
                    label: 'Nama Jurusan',
                    id: 'nama_jurusan_masuk',
                    name: 'nama_jurusan_masuk',
                    valueField: 'id_jurusan',
                    displayField: 'nama_jurusan',
                    bind: {
                        store: 'lisjurusan'
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
                        handler: 'editMasuk'
                    }
                    ,{
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('emasukfrm').reset();
                        }

                    }
                    
                    ]
                }
                


                    ]
    }]
    
});