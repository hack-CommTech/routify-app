import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';

/**
 * 開発に便利な画面リンクリスト
 */
const links: { name: string; path: string }[] = [
  { name: 'リスト画面', path: '/list' },
  { name: 'スケジュール画面', path: '/schedule' },
  { name: '習慣追加画面', path: '/list/new' },
  { name: '習慣の詳細画面', path: '/list/detail/hogehoge' },
  { name: '集中画面', path: '/focus' },
];

/**
 * 開発に便利な画面リンク
 */
const Home = () => (
  <Box p={2}>
    <Typography variant="h5" fontWeight="bold">
      画面リスト
    </Typography>
    <List>
      {links.map((link) => (
        <ListItem key={link.path} disablePadding>
          <ListItemButton href={link.path}>
            {link.name}
            <Chip label={link.path} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Home;
