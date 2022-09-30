import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Grid,
  Card,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
  CardContent,
  Stack,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      {/* Header */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ border: 1, bgcolor: "#FFFFFF" }}>
          <Toolbar sx={{ mx: 10 }}>
            <Typography color="#212121" variant="h5" component="div" sx={{ flexGrow: 1 }}>
              SHOME
            </Typography>
            <Link style={{ paddingLeft: "3vw", textDecoration: "none" }} color="#212121">
              Tranh chủ
            </Link>
            <Link style={{ paddingLeft: "3vw", textDecoration: "none" }} color="#212121">
              Trở thành chủ thuê
            </Link>
            <Link
              component={NextLink}
              href="/login"
              style={{ paddingLeft: "3vw", textDecoration: "none" }}
              color="#212121"
            >
              Đăng nhập
            </Link>
            <Link
              component={NextLink}
              href="/sign-up"
              style={{ paddingLeft: "3vw", textDecoration: "none" }}
              color="#212121"
            >
              Đăng kí
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Search form */}
      <Box sx={{ flexGrow: 1, mb: 6 }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid
            item
            xs={4}
            sx={{ zIndex: 1300 }}
            style={{ position: "absolute", left: "10vw", top: "25vh" }}
          >
            <Card style={{ borderRadius: "15px" }} sx={{ border: 2, p: 5 }}>
              <Grid sx={{ mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  THUÊ PHÒNG TRỌ
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  TÌM PHÒNG TRỌ TẠI VIỆT NAM
                </Typography>
              </Grid>
              <Grid sx={{ mb: 3 }}>
                <FormControl fullWidth>
                  <InputLabel id="location_lable">ĐỊA ĐIỂM</InputLabel>
                  <Select labelId="location_lable" id="location_lable" autoWidth label="Địa điểm">
                    <MenuItem value="">
                      <em>Trống</em>
                    </MenuItem>
                    <MenuItem>Quận 1</MenuItem>
                    <MenuItem>Quận Phú Nhuận</MenuItem>
                    <MenuItem>Quận Thủ Đức</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{ mb: 3 }}>
                <FormControl fullWidth>
                  <InputLabel id="roomType_lable">LOẠI PHÒNG</InputLabel>
                  <Select labelId="roomType_lable" id="roomType_lable" autoWidth label="Loại phòng">
                    <MenuItem value="">
                      <em>Trống</em>
                    </MenuItem>
                    <MenuItem>Phòng đơn</MenuItem>
                    <MenuItem>Phòng tập thể</MenuItem>
                    <MenuItem>Căn hộ</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{ mb: 3 }}>
                <FormControl fullWidth>
                  <InputLabel id="price_lable">GIÁ THUÊ</InputLabel>
                  <Select labelId="price_lable" id="price_lable" autoWidth label="Giá thuê">
                    <MenuItem value="">
                      <em>Trống</em>
                    </MenuItem>
                    <MenuItem>Dưới 1 triệu</MenuItem>
                    <MenuItem>Từ 1 đến 7 triệu</MenuItem>
                    <MenuItem>Từ 7 đến 15 triệu</MenuItem>
                    <MenuItem>Trên 15 triệu</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{ mb: 3 }}>
                <Button fullWidth variant="contained">
                  <SearchIcon></SearchIcon>Tìm kiếm
                </Button>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={8} sx={{ pr: 5, pt: 5, ml: 40 }}>
            <Card minHeight="60vh" style={{ borderRadius: "15px" }} sx={{ border: 5 }}>
              <CardMedia
                component="img"
                image="https://wallpaperaccess.com/full/1631409.jpg"
                alt="Hochiminh City"
              ></CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />

      {/* Xu huong tim kiem */}
      <Box sx={{ px: 10, py: 2 }}>
        <Grid sx={{ my: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Xu hướng tìm kiếm
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 4 }}
        >
          <Grid item xs={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardMedia
                style={{ height: 135 }}
                component="img"
                image="https://top10tphcm.com/wp-content/uploads/2020/11/quan-2-tphcm-co-bao-nhieu-phuong.jpg"
                alt="Trending"
              ></CardMedia>
              <Typography
                align="center"
                sx={{ mt: -4, fontWeight: "bold" }}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                Quận 2
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardMedia
                style={{ height: 135 }}
                component="img"
                image="https://cdn3.ivivu.com/2018/08/choi-gi-o-toa-nha-cao-nhat-viet-nam-moi-khanh-thanh-ivivu-1-1024x633.jpg"
                alt="Trending"
              ></CardMedia>
              <Typography
                align="center"
                sx={{ mt: -4, fontWeight: "bold" }}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                Bình Thạnh
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardMedia
                style={{ height: 135 }}
                component="img"
                image="https://vcdn1-vnexpress.vnecdn.net/2022/02/19/sai-gon-vang-ve-2-2335-1645262792.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=tqjNi2L5hASQqiGHaJkHow"
                alt="Trending"
              ></CardMedia>
              <Typography
                align="center"
                sx={{ mt: -4, fontWeight: "bold" }}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                Quận 1
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardMedia
                style={{ height: 135 }}
                component="img"
                image="https://i.ytimg.com/vi/RioieU8sdnE/maxresdefault.jpg"
                alt="Trending"
              ></CardMedia>
              <Typography
                align="center"
                sx={{ mt: -4, fontWeight: "bold" }}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                Quận 7
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardMedia
                style={{ height: 135 }}
                component="img"
                image="https://upload.wikimedia.org/wikipedia/commons/4/4e/%C4%90%C6%B0%E1%BB%9Dng_Nguy%E1%BB%85n_V%C4%83n_Tr%E1%BB%95i_%2C_q_Ph%C3%BA_nhu%E1%BA%ADn_%2C_HCM_-_panoramio_%281%29.jpg"
                alt="Trending"
              ></CardMedia>
              <Typography
                align="center"
                sx={{ mt: -4, fontWeight: "bold" }}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                Phú Nhuận
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardMedia
                style={{ height: 140 }}
                component="img"
                image="https://sohongrieng.com/upload/images/thanh-pho-thu-duc-gom-nhung-quan-nao.jpg"
                alt="Trending"
              ></CardMedia>
              <Typography
                align="center"
                sx={{ mt: -4, fontWeight: "bold" }}
                style={{
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
              >
                TP Thủ Đức
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />

      {/* Phong tro cho thue */}
      <Box sx={{ px: 10, py: 2 }}>
        <Grid sx={{ my: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Phòng trọ cho thuê
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ my: 3 }}
          spacing={{ xs: 2, md: 6 }}
        >
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="For_rent"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    B23, Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="For_rent"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    705 Nguyễn Thị Định, Cát Lái, Quận 2, Thành phố Hồ Chí Minh, Việt Nam
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="Trending"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    B23, Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="Trending"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    B23, Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ my: 3 }}
          spacing={{ xs: 2, md: 6 }}
        >
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="For_rent"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    B23, Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="For_rent"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    705 Nguyễn Thị Định, Cát Lái, Quận 2, Thành phố Hồ Chí Minh, Việt Nam
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="Trending"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    B23, Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ border: 1, borderColor: "#E8E8E8" }}>
              <Box sx={{ mx: 2, mt: 2 }}>
                <CardMedia
                  sx={{ borderRadius: 5 }}
                  style={{ height: 200 }}
                  component="img"
                  image="https://toplist.vn/images/800px/xac-dinh-mo-hinh-xay-dung-phong-tro-cho-thue-203927.jpg"
                  alt="Trending"
                ></CardMedia>
              </Box>
              <CardContent>
                <Typography variant="h6">Nhà trọ Ti Béo</Typography>
                <Typography variant="h7">
                  <Link style={{ color: "#797a7f", textDecoration: "none" }}>
                    B23, Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Pagination count={10} showFirstButton showLastButton />
        </Stack>
      </Box>
      <Divider variant="middle" />

      {/* Footer */}
      <Box sx={{ fontFamily: "Poppins" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ p: 7, color: "#5b5754" }}
        >
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              SHOME
            </Typography>
            <br />
            <Typography variant="h7">
              Trụ sở chính: 28-30 đường số 2, Hưng Gia 5, P.Tân Phong, Quận 7, TP. Hồ Chí Minh
            </Typography>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Tìm hiểu thêm
              </Typography>
              <br />
              <Typography>Về chúng tôi</Typography>
              <Typography>Chính sách bảo mật</Typography>
              <Typography>Điều khoản và điều kiện</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Liên hệ
              </Typography>
              <br />
              <Typography>support@shome.id</Typography>
              <Typography>021 - 2208 - 1996</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid sx={{ bgcolor: "#1565C0", mt: 1 }}>
        <Typography align="center" sx={{ py: 1, color: "#FFFFFF" }}>
          Copyright 2022 • All rights reserved • S HOME
        </Typography>
      </Grid>
    </div>
  );
}
