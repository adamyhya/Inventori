/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.addKeluar', {
    extend: 'Ext.form.Panel',
    xtype: 'Tbhkeluar',
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
        'Inventori.view.main.MainModel',
        'Inventori.store.Lisbarang',
        'Inventori.store.Lisbarang1'
    ],
      controller: 'main',
    viewModel: 'main',
    shadow: true,

    cls: 'demo-solid-background',
    id: 'tkeluarfrm',
    items:[{
            xtype: 'fieldset',
            id: 'fieldset3',
            title: 'Tambah Barang keluar',
            width: 300,
            height: 400,
            scrollable: true,
            default:{
                labelWidth: '35%'
            },
            items: [

                {
                    xtype: 'textfield',
                    id: 'id_barang1',
                    name: 'id_barang1',
                    hidden: true,
                    bind: '{baranglis1.selection.id_barang}'
                },
                {
                    xtype: 'textfield',
                    id: 'namak',
                    name: 'namak',
                    hidden: true,
                    bind: '{baranglis1.selection.nama_barang}',
                    listeners:{
                        change: function(){
                            Ext.getCmp('cari1').setPlaceHolder(Ext.getCmp('namak').getValue());
                        }
                    }
                },
                {
                    xtype: 'selectfield',
                    id: 'jurusank',
                    name: 'jurusank',
                    label: 'Nama Jurusan',
                    displayField: 'nama_jurusan',
                    valueField: 'id_jurusan',
                    bind: { store: 'lisjurusan' }
                },
                {
                    xtype: 'textfield',
                    id: 'keterangan1',
                    name: 'keterangan1',
                    placeHolder: 'Tulis Keterangan',
                    label: 'Keterangan',    
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    id: 'cari1',
                    name: 'cari1',
                    label: 'Nama Barang',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('cari').getValue();
                            Ext.getStore('lisbarang1').filter('nama_barang' , caris);
                            Ext.getCmp('jumlahk').setValue(0);
                        }
                    }   
                },
                {
                    xtype: 'textfield',
                    id: 'jml1',
                    name: 'jml1',
                    hidden: true,
                    bind: '{baranglis1.selection.jumlah_barang}',
                    listeners: {
                        change: function(){
                        b = Ext.getCmp('jml1').getValue();
                        Ext.getCmp('jumlahk').setMaxValue(b);
                        Ext.getCmp('jumlahk').setValue(0);
                        }
                    }
                },
                {
                    xtype: 'spinnerfield',
                    id: 'jumlahk',
                    name: 'jumlahk',
                    label: 'Jumlah',
                    ui: 'action',
                    minValue: 0,
                    maxValue: 0,
                    clearable: true,
                    stepValue: 1,
                    cycle: true,
                    listeners: {
                        change: function(){
                           cek = Ext.getCmp('jumlahk').getValue();
                           if(cek == 0){
                            Ext.getCmp('ok1').setDisabled(true);
                           }
                           else{
                            Ext.getCmp('ok1').setDisabled(false);
                           }
                        }
                    }

                },
                {
                    width: 280,
                    height: 130,
                    xtype: 'list',
                    shadow: true,
                    scrollable: true,
                    reference: 'baranglis1',
                    store: 'lisbarang1',
                    itemTpl: '{id_barang} : {nama_barang} -> {jumlah_barang}'
                    
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
                        id: 'ok1',
                        name: 'ok1',
                        text: 'OK',
                        disabled: true,
                        ui: 'action',
                        handler: 'addkeluar'

                    },
                    {
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('tkeluarfrm').reset();
                    }
                    }
                    ]
                }
                


                    ]
    }]
    
});