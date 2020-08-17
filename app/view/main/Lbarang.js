Ext.define('Inventori.view.main.Lbarang', {
extend: 'Ext.grid.Grid',
alias: 'view.lbarang',
    xtype: 'baranglist',
    id: 'grid',

    requires: [
        'Inventori.store.Lisbarang',
        'Inventori.view.main.barang.Editbarang'
    ],

    store: {
        type: 'lisbarang'
    },

    columns: [
        { text: '', dataIndex: 'id_barang', hidden: true },
        { text: 'No', dataIndex: 'nomor', width: 55 },
        { text: 'Nama Barang',  dataIndex: 'nama_barang', width: 230 },
        { text: 'Kategori', dataIndex: 'nama_kategori', width: 120 },
        { text: 'Jumlah', dataIndex: 'jumlah_barang', width: 120 },
        { text: 'Satuan', dataIndex: 'nama_satuan', width: 120 },
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
                        Ext.getStore('lisbarang').remove(cell);
                        Ext.getStore('lisbarang').load();
                        Ext.getCmp('ext-gridcolumn-3').setText('Nama Barang ' + '<b>( Total : ' + Ext.getStore('lisbarang').count() + ' )</b>');
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
                    id: 'namacari',
                    name: 'namacari',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacari').getValue();
                            Ext.getStore('lisbarang').filter('nama_barang' , caris);
                            Ext.getCmp('ext-gridcolumn-3').setText('Nama Barang ' + '<b>( Total : ' + Ext.getStore('lisbarang').count() + ' )</b>');
                            
                        }
                    }   
                },
                {
                    text: ''
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    name: 'butadd',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Tbhbarang',
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
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 600,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 600,
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
                    id: 'showedtb',
                    name: 'showedtb',
                    bind: '',
                    disabled: true,
                    handler: function(btn) {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Edtbarang',
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
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 420 : 420,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }
                this.overlay.show();
                record = Ext.getCmp('lbarang').getSelection();
                Ext.getCmp('idbar').setValue(record.data.id_barang);
                Ext.getCmp('namaeb').setValue(record.data.nama_barang);
                Ext.getCmp('oldnamaeb').setValue(record.data.nama_barang);
                Ext.getCmp('namaekat').setValue(record.data.nama_kategori);
                Ext.getCmp('jumlaheb').setValue(record.data.jumlah_barang);
                Ext.getCmp('oldjumlaheb').setValue(record.data.jumlah_barang);
                Ext.getCmp('namaes').setValue(record.data.nama_satuan);
                }

                     
                }
            ]
        }
        ],

    listeners: {
        select: function(){
            Ext.getCmp('showedtb').setDisabled(false);
        }
    }
});
