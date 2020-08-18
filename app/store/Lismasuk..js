Ext.define('Inventori.store.Lismasuk', {
    extend: 'Ext.data.Store',
    storeId: 'lismasuk',
    alias: 'store.lismasuk',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_brg_masuk', 'id_barang', 'nama_barang', 'nama_kategori', 'jumlah_barang_masuk', 'nama_satuan', 'tgl_masuk', 'nama_jurusan', 'id_pengguna', 'keterangan', 'id_user'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apimasuk.php?action=1",
            create: "http://localhost/inventaris/apimasuk.php?action=2",
            destroy: "http://localhost/inventaris/apimasuk.php?action=3",
            update: "http://localhost/inventaris/apimasuk.php?action=4",
        },
        extraParams: {
        iduser : localStorage.getItem('id_user')
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
