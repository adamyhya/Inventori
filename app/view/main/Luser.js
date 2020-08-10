Ext.define('Inventori.view.main.Luser', {
extend: 'Ext.grid.Grid',
    xtype: 'userlist',

    requires: [
        'Inventori.store.Lisuser'
    ],

    store: {
        type: 'lisuser'
    },

    columns: [
        { text: 'No', dataIndex: 'nomor', width: 55 },
        { text: '',  dataIndex: 'id_user', hidden:true },
        { text: 'Username', dataIndex: 'uname', width: 150 },
        { text: 'Password', dataIndex: 'pwd', width: 140 },
        { text: 'Nama', dataIndex: 'nama_user', width: 150 },
        { text: 'Hak Akases', dataIndex: 'akses', width: 120 },
        { text: 'Kontak', dataIndex: 'kontak', width: 150 },
        { text: 'Tanggal Buat', dataIndex: 'tgl_buat', width: 200 },
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
                    bind: '',
                    handler: 'onVerifyTap'
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
                    placeHolder: 'Nama Pengguna',
                    id: 'namacariu',
                    name: 'namacariu',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacariu').getValue();
                            Ext.getStore('lisuser').filter('nama_user' , caris);
                        }
                    }   
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
                        xtype: 'Tbhuser',
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
            ]
        }
        ],

    listeners: {
        select: 'onItemSelected'
    }
});
