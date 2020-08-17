Ext.define('Inventori.view.main.Lmasuk', {
extend: 'Ext.grid.Grid',
alias: 'view.lmasuk',
    xtype: 'masuklist',
    requires: [
        'Inventori.store.Lismasuk',
        'Inventori.view.main.barang.Editmasuk'
    ],

    store: {
        type: 'lismasuk'
    },

    columns: [
        { text: '', dataIndex: 'id_brg_masuk', hidden: true },
        { text: '', dataIndex: 'id_barang', hidden: true },   
        { text: 'Nama Barang', dataIndex: 'nama_barang', width: 230 },
        { text: 'Kategori', dataIndex: 'nama_kategori', width: 120 },
        { text: 'Jumlah', dataIndex: 'jumlah_barang_masuk', width: 120 },
        { text: 'Satuan', dataIndex: 'nama_satuan', width: 120 },
        { text: 'Tanggal', dataIndex: 'tgl_masuk', width: 220 },
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
                        Ext.getCmp('ext-gridcolumn-10').setText('Nama Barang ' + '<b>( Total : ' + Ext.getStore('lismasuk').count() + ' )</b>');
                    }
                }

                 }
        }   
    ],
    items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {
                xtype: 'searchfield',
                    placeHolder: 'Nama Barang',
                    id: 'namacari1',
                    name: 'namacari1',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacari1').getValue();
                            Ext.getStore('lismasuk').filter('nama_barang' , caris);
                            Ext.getCmp('ext-gridcolumn-10').setText('Nama Barang ' + '<b>( Total : ' + Ext.getStore('lismasuk').count() + ' )</b>');
                        }
                    }   
                },
                {
                    text: ''
                },
                {
                    xtype: 'button',
                    
                    iconCls: 'x-fa fa-plus',
                    text: '',
                    name: 'butadd1',
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
                },
                {
                    xtype: 'button',                   
                    iconCls: 'x-fa fa-pencil',
                    id: 'showedtb1',
                    name: 'showedtb1',
                    bind: '',
                    disabled: true,
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
                Ext.getCmp('id_barangm').setValue(record.data.id_barang);
                Ext.getCmp('nama_brg_masuk').setValue(record.data.nama_barang);
                Ext.getCmp('nama_jurusan_masuk').setValue(record.data.nama_jurusan);
                Ext.getCmp('jumlah_masuk').setValue(record.data.jumlah_barang_masuk);
                Ext.getCmp('ket_brgmasuk').setValue(record.data.keterangan);
                }
                }
            ]
        }
        ]
});
