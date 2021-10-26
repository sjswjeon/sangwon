package com.example.sangwon.controller;

import com.example.sangwon.Model.Board;
import com.example.sangwon.Model.Message;
import com.example.sangwon.Model.User;
import com.example.sangwon.repository.BoardRepository;
import com.example.sangwon.repository.MessageRepository;
import com.example.sangwon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/mypage")
public class MyPageController {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/main")
    public String main(Model model, Authentication authentication, @PageableDefault(size = 6, sort = "date", direction = Sort.Direction.DESC) Pageable pageable) {
        String authenticationName = authentication.getName();
        User user = userRepository.findByUsername(authenticationName);
        int totalBoardSize = user.getBoards().size();
        Page<Message> receivedMessages = messageRepository.findAllByReceiver(authenticationName, pageable);
        long totalReceivedMessages = receivedMessages.getTotalElements();

        model.addAttribute("user", user);
        model.addAttribute("totalBoardSize", totalBoardSize);
        model.addAttribute("totalReceivedMessages", totalReceivedMessages);

        Page<Board> boards = boardRepository.findByUsername(authenticationName, pageable);
        model.addAttribute("boards", boards);
        model.addAttribute("board", new Board());

        model.addAttribute("receivedMessages", receivedMessages);

        return "mypage/main";
    }

}
