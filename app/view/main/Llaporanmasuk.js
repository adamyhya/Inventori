Ext.define('Inventori.view.main.Llaporanmasuk', {
extend: 'Ext.grid.Grid',
    alias: 'view.llaporanmasuk',
    xtype: 'laporanmasuklist',
    requires: [
        'Inventori.store.Lislaporanmasuk',
        'Inventori.store.Listahunmasuk'
    ],
    store: {
        type: 'lislaporanmasuk'
    },
    columns: [
        { text: '', dataIndex: 'id_brg_masuk', hidden: true },
        { text: '', dataIndex: 'id_barang', hidden: true },
        { text: '', dataIndex: 'jumlah_barang', hidden: true }, 
        { text: 'Nama Barang',  dataIndex: 'nama_barang', width: 230 },
        { text: 'Kategori', dataIndex: 'nama_kategori', width: 120 },
        { text: 'Jumlah', dataIndex: 'jumlah_barang_masuk', width: 120 },
        { text: 'Satuan', dataIndex: 'nama_satuan', width: 120 },
        { text: 'Tanggal', dataIndex: 'tgl_masuk', width: 180 },
        { text: 'Jurusan', dataIndex: 'nama_jurusan', width: 120 },
        { text: 'Keterangan', dataIndex: 'keterangan', width: 230 },
        { text: 'Admin', dataIndex: 'nama_user', width: 120 },
        { text: 'Hapus',
            width: 100,
            ignoreExport: true,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-trash-o',
                    ui: 'action',
                    handler: function(btn) {
                        record = btn.getParent();
                        cell = record.getRecord();
                        Ext.getStore('lismasuk').remove(cell);
                        Ext.getStore('lismasuk').load();
                        Ext.getStore('lisbarang').load();
                    }
                }

                 }
        }
    ],

    items: [
        {
                xtype: 'toolbar',
                docked: 'top',
                items:[
                {
                 xtype: 'selectfield',
                    label: 'Tahun',
                    id: 'tahun1',   
                    name: 'tahun1',
                    width: 100,
                    valueField: 'tahun',
                    displayField: 'tahun',
                    bind: {
                        store: 'listahunmasuk'
                    },
                    listeners: {
                        change: function(){
                            thn = Ext.getCmp('tahun1').getValue();
                            store = Ext.getStore('lisbulanmasuk');
                            store.proxy.extraParams = { tahun : thn };
                            store.load();
                            store1 = Ext.getStore('lislaporanmasuk');
                            store1.proxy.extraParams = { tgl : thn };
                            store1.load();
                        }
                    }   
                },
                {
                 xtype: 'selectfield',
                    label: 'Bulan',
                    id: 'bulan1',   
                    name: 'bulan1',
                    width: 150,
                    valueField: 'bulan',
                    displayField: 'bulan',
                    bind: {
                        store: 'lisbulanmasuk'
                    },
                    listeners: {
                        change: function(){
                        bln = Ext.getCmp('bulan1').getValue();
                            Ext.getStore('lislaporanmasuk').filter({
                                property: 'tgl_masuk',
                                value: bln,
                                anyMatch: true,
                                caseSensitive: false
                            });
                        }
                    }   
                }
                
                ]    
                },
        {
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {
                xtype: 'searchfield',
                    placeHolder: 'Nama Barang',
                    id: 'namacarilaporan1',
                    name: 'namacarilaporan1',
                    width:200,
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacarilaporan1').getValue();
                            Ext.getStore('lislaporanmasuk').filter('nama_barang' , caris);
                        }
                    }   
                },
                {
                    text: ''
                },
                
                    {
                 xtype: 'button', 
                 //ui: 'action',          
                    iconCls: 'x-fa fa-floppy-o',
                    text: 'Save'
                    
                
                }/*,
                {
                    xtype: 'button',           
                    iconCls: 'x-fa fa-plus',
                    name: 'butadd3',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Tbhmasuk',
                        floated: true,
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation: {
                            type: 'popIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 340 : 340,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 220,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }

                this.overlay.show();
                }


                }*/ 
                /*,
                {

                    xtype: 'button',                   
                    iconCls: 'x-fa fa-pencil',
                    id: 'showedtb20',
                    name: 'showedtb20',
                    disabled: true,
                    bind: '',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Edtmasuk',
                        floated: true,
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation: {
                            type: 'popIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 240 : 340,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 430 : 430,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }
                this.overlay.show();
                record = Ext.getCmp('lmasuk').getSelection();  
                Ext.getCmp('id_brg_masuk').setValue(record.data.id_brg_masuk);
                Ext.getCmp('id_barangk').setValue(record.data.id_barang);
                Ext.getCmp('nama_brg_masuk').setValue(record.data.nama_barang);
                Ext.getCmp('nama_jurusan_masuk').setValue(record.data.nama_jurusan);
                Ext.getCmp('jumlah_masuk').setValue(record.data.jumlah_barang_masuk);
                Ext.getCmp('ket_brgmasuk').setValue(record.data.keterangan);
                Ext.getCmp('stok1').setValue(record.data.jumlah_barang);
                Ext.getCmp('jumlah_masuk').setMaxValue(record.data.jumlah_barang);
                }
                }*/
            ]
        }
        ]
    //listeners: {
      //  select: 'onItemSelected'
    //}
});
