Ext.define('Inventori.view.main.Lmasuk', {
extend: 'Ext.grid.Grid',
    xtype: 'masuklist',

    requires: [
        'Inventori.store.Lismasuk'
    ],

    store: {
        type: 'lismasuk'
    },

    columns: [
        { text: '', dataIndex: 'id_barang_masuk', hidden: true },
        { text: 'No', dataIndex: 'nomor', width: 55 },
        { text: 'Nama Barang',  dataIndex: 'nama_barang', width: 230 },
        { text: 'Kategori', dataIndex: 'nama_kategori', width: 120 },
        { text: 'Jumlah', dataIndex: 'jumlah_barang_masuk', width: 120 },
        { text: 'Satuan', dataIndex: 'nama_satuan', width: 120 },
        { text: 'Tanggal', dataIndex: 'tgl_masuk', width: 180 },
        { text: 'Jurusan', dataIndex: 'nama_jurusan', width: 120 },
        { text: 'Admin', dataIndex: 'nama_user', width: 120 },    
        { text: 'Edit',
            width: 100,
            ignoreExport: true,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    ui: 'action',
                    bind: '',
                    handler: 'onVerifyTap'
                }

                 }
        },
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
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'textfield',
                    placeHolder: 'Nama Barang',
                    name: 'namacar'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-search',
                    name: 'namacar'
                },
                {
                    text: ''
                },
                {
                    xtype: 'button',
                    
                    iconCls: 'x-fa fa-plus',
                    text: 'Add',
                    name: 'butadd',
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
            ]
        }
        ],

    listeners: {
        select: 'onItemSelected'
    }
});
