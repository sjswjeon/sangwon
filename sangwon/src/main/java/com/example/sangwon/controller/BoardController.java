package com.example.sangwon.controller;

import com.example.sangwon.Model.Board;
import com.example.sangwon.Model.Comment;
import com.example.sangwon.Model.User;
import com.example.sangwon.repository.BoardRepository;
import com.example.sangwon.repository.UserRepository;
import com.example.sangwon.service.BoardService;
import com.example.sangwon.service.CommentService;
import com.example.sangwon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BoardService boardService;

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @GetMapping("/list")
    public String list(Model model, @RequestParam(required = false, defaultValue = "") String searchText, @PageableDefault(size = 10, sort = "date", direction = Sort.Direction.DESC) Pageable pageable, Authentication authentication) {
        Page<Board> boards = boardRepository.findByTitleContainingOrContentContaining(searchText, searchText, pageable);
        model.addAttribute("boards", boards);
        model.addAttribute("board", new Board());

        int startPage = Math.max(1, boards.getPageable().getPageNumber() - 4);
        int endPage = Math.min(boards.getTotalPages(), boards.getPageable().getPageNumber() + 4);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);

        String authenticationName = authentication.getName();
        User user = userRepository.findByUsername(authenticationName);
        model.addAttribute("user", user);

        List<Board> likedBoards = userService.getLikedBoards(user);
        model.addAttribute("likedBoards", likedBoards);

        return "board/list";
    }

    @PostMapping("/list")
    public String savePost(@ModelAttribute Board board, Authentication authentication) {
        String authenticationName = authentication.getName();
        boardService.save(board, authenticationName);
        return "redirect:/board/list";
    }

    @GetMapping("/form")
    public String form(Model model, @RequestParam(required = false, defaultValue = "") String searchText, @PageableDefault(size = 10, sort = "date", direction = Sort.Direction.DESC) Pageable pageable, Authentication authentication) {
        Page<Board> boards = boardRepository.findByTitleContainingOrContentContaining(searchText, searchText, pageable);
        model.addAttribute("boards", boards);
        model.addAttribute("board", new Board());

        String authenticationName = authentication.getName();
        User user = userRepository.findByUsername(authenticationName);
        model.addAttribute("user", user);

        return "board/write";
    }

//    @GetMapping("/read")
//    public String read(@RequestParam Long id, Model model, Authentication authentication) {
//        Board board = boardRepository.findById(id).orElse(null);
//        boardService.read(board);
//        List<Comment> allFirstComments = commentService.findAllFirstComments(board);
//        String authenticationName = authentication.getName();
//        User user = userRepository.findByUsername(authenticationName);
//
//        model.addAttribute("user", user);
//        model.addAttribute("board", board);
//        model.addAttribute("firstcomments", allFirstComments);
//        return "board/read";
//    }

    @PostMapping("/read/firstcomment")
    public String firstComment(Comment comment, Authentication authentication) {
        String authenticationName = authentication.getName();
        commentService.save(comment, authenticationName);

        return "redirect:/board/list";
    }

    @PostMapping("/read/secondcomment")
    public String secondComment(Comment comment, Authentication authentication) {
        String authenticationName = authentication.getName();
        commentService.saveSecondComment(comment, authenticationName);

        return "redirect:/board/list";
    }
}
